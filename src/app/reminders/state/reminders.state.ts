import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RemindersService } from '../services/reminders.service';
import { AddReminder, EditReminder, EditReminderFailure, GetRemindersList, GetRemindersListFailure } from './reminders.actions';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReminderModel } from './reminders.model';
import { HttpErrorResponse } from '@angular/common/http';

export class RemindersStateModel {
    reminders: undefined;
    addReminder: ReminderModel | undefined;
    editReminder: ReminderModel | undefined;
}

@State<RemindersStateModel>({
    name: 'reminders',
    defaults: {
        reminders: undefined,
        addReminder: undefined,
        editReminder: undefined
    }
})


@Injectable()
export class RemindersState {
    constructor(private service: RemindersService, private messageService: NzMessageService) {}

    @Action(GetRemindersList)
    getRemindersList({ patchState, dispatch }: StateContext<RemindersStateModel>): Observable<any> {
        return this.service.getRemindersList()
        .pipe(
            tap((response: any) => patchState({ reminders: response })),
            catchError((httpError: HttpErrorResponse) => {
                const error = (httpError.error);
                this.messageService.error('An Error Occured');
                return dispatch(new EditReminderFailure(error));
            })
        );
    }

    @Action(AddReminder)
    addReminder({ patchState, dispatch }: StateContext<RemindersStateModel>, action: any): Observable<any> {
        return this.service.addReminder(action.payload)
        .pipe(
            tap((response: any) => patchState({ addReminder: response })),
            catchError((httpError: HttpErrorResponse) => {
                const error = (httpError.error).error;
                this.messageService.error('An Error Occured');
                return dispatch(new EditReminderFailure(error));
            })
        );
    }

    @Action(EditReminder)
    editReminder({ patchState, dispatch }: StateContext<RemindersStateModel>, action: any): Observable<any> {
        return this.service.editReminder(action.payload)
        .pipe(
            tap((response: any) => patchState({ editReminder: response })),
            catchError((httpError: HttpErrorResponse) => {
                const error = (httpError.error).error;
                this.messageService.error('An Error Occured');
                return dispatch(new GetRemindersListFailure(error));
            })
        );
    }
}


