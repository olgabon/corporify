import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReminderModel } from '../../state/reminders.model';

@Component({
  selector: 'app-reminders-modal',
  templateUrl: './reminders-modal.component.html',
  styleUrls: ['./reminders-modal.component.less', '../reminders-listing/reminders-listing.component.less']
})
export class RemindersModalComponent implements OnInit {
  @Input() details: any;
  @Output() addNew = new EventEmitter<ReminderModel>();
  @Output() edit = new EventEmitter<ReminderModel>();
  @Output() cancel = new EventEmitter<boolean>();
  form!: FormGroup;
  repeatOptions = [
    { label: 'Repeat', value: 'true' },
    { label: 'Do not repeat', value: 'false'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.form = this.fb.group({
        reminderDate: this.details ? new Date(this.details.data.reminderDate * 1000) : [null, [Validators.required]],
        archived: this.details ? this.details.data.archived : [null, [Validators.required]],
        description: this.details ? this.details.data.description : [null]
      });

  }

  cancelModal(){
    this.form.reset();
    this.cancel.emit(true);
  }

  onSave(){
    const remindreDateUnix = new Date(this.form.controls.reminderDate.value).getTime() / 1000;
    if (this.details) {
      const updatedReminder = {
        id: this.details.id,
        reminderDate: remindreDateUnix,
        archived: this.form.controls.archived.value,
        description: this.form.controls.description.value
      };
      this.edit.emit(updatedReminder);
    } else {
      const newReminder = {
        reminderDate: remindreDateUnix,
        archived: this.form.controls.archived.value,
        description: this.form.controls.description.value
      };
      this.addNew.emit(newReminder);
    }
    this.cancel.emit(true);
  }

}
