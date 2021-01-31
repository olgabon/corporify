import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemindersComponent } from './containers/reminders/reminders.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from '../shared/shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { RemindersState } from './state/reminders.state';
import { RemindersListingComponent } from './components/reminders-listing/reminders-listing.component';
import { RemindersModalComponent } from './components/reminders-modal/reminders-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RemindersComponent, RemindersListingComponent, RemindersModalComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: RemindersComponent}
    ]),
    NgxsModule.forFeature([RemindersState])
  ]
})
export class RemindersModule { }
