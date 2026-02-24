export interface Attendee{
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    emailAddress: string;
}

export interface CreateAttendee{
    firstName: string;
    lastName: string;
    userName: string;
    emailAddress: string;
}