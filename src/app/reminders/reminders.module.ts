import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemindersComponent } from './containers/reminders/reminders.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from '../shared/shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { RemindersState } from './state/reminders.state';
import { RemindersListingComponent } from './components/reminders-listing/reminders-listing.component';



@NgModule({
  declarations: [RemindersComponent, RemindersListingComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: RemindersComponent}
    ]),
    NgxsModule.forFeature([RemindersState])
  ]
})
export class RemindersModule { }
