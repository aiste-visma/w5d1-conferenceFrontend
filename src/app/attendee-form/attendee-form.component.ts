import { Component } from "@angular/core";  

import { Attendee } from "../models/attendee.model";
import { FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-attendee-form',
    templateUrl: './attendee-form.component.html',
    imports: [FormsModule, JsonPipe, CommonModule]
})

export class AttendeeFormComponent{
    attendee: Attendee = {
        id: 0,
        firstName: '',
        lastName: '',
        userName: '',
        emailAddress: ''
    }
    submittedAttendee: Attendee | null = null;
    submitted = false;

    onSubmit(form: NgForm){
        this.submitted = true;
        this.submittedAttendee = {...this.attendee};
        form.resetForm();
    }   
}