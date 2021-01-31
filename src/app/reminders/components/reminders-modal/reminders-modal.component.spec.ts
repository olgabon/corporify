import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RemindersModalComponent } from './reminders-modal.component';

describe('RemindersModalComponent', () => {
  let component: RemindersModalComponent;
  let fixture: ComponentFixture<RemindersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemindersModalComponent ],
      imports: [ FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
