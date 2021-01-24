import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetRemindersList } from '../../state/reminders.actions';

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

}
