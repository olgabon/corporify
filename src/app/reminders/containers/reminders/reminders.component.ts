import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddReminder, EditReminder, GetRemindersList } from '../../state/reminders.actions';
import { ReminderModel } from '../../state/reminders.model';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.less']
})
export class RemindersComponent implements OnInit {
  @Select((state: any) => state.reminders.reminders)
  reminders$: Observable<any> | undefined ;

  constructor( private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetRemindersList());
  }

  addReminder(e: ReminderModel){
    this.store.dispatch(new AddReminder(e));
  }

  editReminder(e: ReminderModel){
    this.store.dispatch(new EditReminder(e));
  }

}
