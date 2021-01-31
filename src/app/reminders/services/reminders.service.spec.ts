import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RemindersService } from './reminders.service';

describe('RemindersService', () => {
  let service: RemindersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] 
    });
    service = TestBed.inject(RemindersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
