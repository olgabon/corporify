import { HttpErrorResponse } from '@angular/common/http';
import { ReminderModel } from './reminders.model';

export class GetRemindersList {
    static readonly type = '[Reminders] Get Reminders List';
    constructor() {}
}

export class GetRemindersListFailure {
    static readonly type = '[Reminders] Get Reminders List Failure';
    constructor(payload: HttpErrorResponse) {}
}

export class AddReminder {
    static readonly type = '[Reminders] Add Reminder';
    constructor(public payload: ReminderModel) {}
}

export class AddReminderFailure {
    static readonly type = '[Reminders] Add Reminder Failure';
    constructor(payload: HttpErrorResponse) {}
}

export class EditReminder {
    static readonly type = '[Reminders] Edit Reminder';
    constructor(public payload: ReminderModel) {}
}

export class EditReminderFailure {
    static readonly type = '[Reminders] Edit Reminder Failure';
    constructor(public payload: HttpErrorResponse) {}
}

