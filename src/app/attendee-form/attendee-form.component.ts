import { Component, Output, EventEmitter } from '@angular/core';

import { Attendee } from "../models/attendee.model";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-attendee-form',
    templateUrl: './attendee-form.component.html',
    imports: [FormsModule, CommonModule]
})

export class AttendeeFormComponent{

     @Output() register = new EventEmitter<Attendee>();

    onSubmit(form: NgForm){
        if (form.valid) {this.register.emit(form.value as Attendee);
        form.resetForm();
        }
    }   
}