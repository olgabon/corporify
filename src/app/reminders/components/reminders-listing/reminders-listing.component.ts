import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminders-listing',
  templateUrl: './reminders-listing.component.html',
  styleUrls: ['./reminders-listing.component.less']
})
export class RemindersListingComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
