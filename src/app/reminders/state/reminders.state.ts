import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RemindersService } from '../services/reminders.service';
import { GetRemindersList } from './reminders.actions';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class RemindersStateModel {
    reminders: undefined;
}

@State<RemindersStateModel>({
    name: 'reminders',
    defaults: {
        reminders: undefined
    }
})


@Injectable()
export class RemindersState {
    constructor(private service: RemindersService, private messageService: NzMessageService) {}

    @Action(GetRemindersList)
    getRemindersList({ setState, patchState }: StateContext<RemindersStateModel>): Observable<any> {
        return this.service.getRemindersList()
        .pipe(
			tap((response: any) => {
                patchState({ reminders: response });
        }),
        // catchError(() => {
        //     return this.messageService.error("The message occured while loading the data");
        // })
        );
    }
}
