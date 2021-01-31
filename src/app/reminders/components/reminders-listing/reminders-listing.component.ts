import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReminderModel, SingleTableReminderModel } from '../../state/reminders.model';

@Component({
  selector: 'app-reminders-listing',
  templateUrl: './reminders-listing.component.html',
  styleUrls: ['./reminders-listing.component.less']
})
export class RemindersListingComponent implements OnInit {
  @Input() data!: SingleTableReminderModel[];
  @Output() addNew = new EventEmitter<ReminderModel>();
  @Output() edit = new EventEmitter<ReminderModel>();
  isModalVisible = false;
  detailsData: any;
  isCheckedButton = true;
  modalTitle!: string;
  constructor() { }

  ngOnInit(): void {}

  openModal(e: string, item?: SingleTableReminderModel){
    if (e === 'add') {
      this.modalTitle = 'Add new reminder';
      this.detailsData = null;
    }
    if (e === 'edit') {
      this.modalTitle = 'Edit reminder';
      this.detailsData = item;
    }
    this.isModalVisible = true;
  }

  editReminder(e: ReminderModel){
    this.edit.emit(e);
    this.detailsData = null;
  }

  addNewReminder(e: ReminderModel){
    this.addNew.emit(e);
  }

  closeModal(e?: boolean){
    this.isModalVisible = false;
    this.detailsData = null;
  }

  sortByDate(){
  if (this.isCheckedButton) {
    this.data = this.data.slice().sort((a: SingleTableReminderModel, b: SingleTableReminderModel) => a.data.reminderDate - b.data.reminderDate);
  }
  if (!this.isCheckedButton) {
    this.data = this.data.slice().sort((a: SingleTableReminderModel, b: SingleTableReminderModel) => b.data.reminderDate - a.data.reminderDate);
  }
  }
}

