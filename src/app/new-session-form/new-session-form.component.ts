import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSession } from '../models/session.model';
import { NetworkStatusService } from '../services/network-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-session-form',
  templateUrl: './new-session-form.component.html',
  styleUrl: './new-session-form.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class NewSessionFormComponent implements OnDestroy {
  @Output() createSession = new EventEmitter<CreateSession>();

  form: FormGroup;
  serverMessage = '';
  isLoading = false;
  serverDown = false;
  private networkSub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private network: NetworkStatusService
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      abstract: ['', [Validators.required, Validators.minLength(10)]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      trackId: [1, [Validators.required, Validators.min(1)]]
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

  ngOnDestroy(): void {
    if (this.networkSub) {
      this.networkSub.unsubscribe();
    }
  }

  onSubmit(): void {
    this.serverMessage = '';
    if (this.form.valid) {
      const session = this.form.value as CreateSession;
      this.createSession.emit(session);
    }
  }

  reset(): void {
    this.form.reset({ trackId: 1 });
    this.serverMessage = '';
  }

  setLoading(loading: boolean): void {
    this.isLoading = loading;
  }

  setServerMessage(message: string): void {
    this.serverMessage = message;
  }
}
