import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { map, catchError, finalize, timeout } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { Attendee } from "../models/attendee.model";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NetworkStatusService } from '../services/network-status.service';

@Component({
    selector: 'app-attendee-form',
    templateUrl: './attendee-form.component.html',
    styleUrl: './attendee-form.component.css',
    imports: [ReactiveFormsModule, CommonModule]
})
export class AttendeeFormComponent implements OnDestroy {
    @Output() register = new EventEmitter<Attendee>();

    form: FormGroup;
    serverMessage = '';
    isLoading = false;
    serverDown = false;
    fieldErrors: { [key: string]: string } = {};
    private networkSub?: Subscription;

    constructor(private fb: FormBuilder, private api: ApiService, private network: NetworkStatusService) {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', {
                validators: [Validators.required],
                asyncValidators: [this.uniqueValidator('userName')],
                updateOn: 'blur'
            }],
            emailAddress: ['', {
                validators: [Validators.required, Validators.email],
                asyncValidators: [this.uniqueValidator('emailAddress')],
                updateOn: 'blur'
            }]
        });
        // react to global network/server down status
        this.networkSub = this.network.status$.subscribe(down => {
            this.serverDown = down;
            try {
                if (down) {
                    this.form.disable();
                } else {
                    this.form.enable();
                }
            } catch { /* noop */ }
        });
    }

    private uniqueValidator(field: 'userName' | 'emailAddress'): AsyncValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return of(null);
            }

            const url = `${this.api.endpoints.attendees}/${encodeURIComponent(control.value)}`;

            return this.api.get<Attendee | null>(url).pipe(
                timeout(5000),
                map(user => user ? { duplicate: true } : null),
                catchError(err => {
                    if (err && (err.name === 'TimeoutError' || (err.status !== undefined && err.status === 0))) {
                        try { this.network.setDown(true); } catch { /* noop */ }
                        return of(null);
                    }
                    if (err && err.status === 404) {
                        return of(null);
                    }
                    console.error('uniqueness check failed', err);
                    return of(null);
                })
            );
        };
    }

    onSubmit(): void {
        this.serverMessage = '';
        if (this.form.valid) {
            this.isLoading = true;
            const attendee = this.form.value as Attendee;

            this.api.post<Attendee>(this.api.endpoints.attendees, attendee).pipe(
                timeout(10000),
                finalize(() => this.isLoading = false)
            ).subscribe({
                next: (created) => {
                    this.register.emit(created);
                    this.form.reset();
                },
                error: (err: any) => {
                    if (err && (err.name === 'TimeoutError' || (err.status !== undefined && err.status === 0))) {
                        this.serverMessage = 'Cannot reach server – please check your network.';
                        try { this.network.setDown(true); } catch { /* noop */ }
                    } else if (err?.status === 409) {
                        this.serverMessage = 'An attendee with that username or email already exists.';
                    } else if (err.status === 400 && err.error && typeof err.error === 'object') {
                        this.fieldErrors = err.error;
                        this.serverMessage = 'Please correct the errors below.';
                    } else {
                        this.serverMessage = 'Unable to register at this time.';
                    }
                }
            });
        }
    }

    ngOnDestroy(): void {
        this.networkSub?.unsubscribe();
    }
}