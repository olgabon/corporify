import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RemindersService } from './reminders.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('RemindersService', () => {
  let injector: TestBed;
  let service: RemindersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    injector = getTestBed();
    service = TestBed.inject(RemindersService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('getRemindersList() should return data', () => {
    service.getRemindersList().subscribe((res) => {
      expect(res).toEqual({data: []});
    });

    const req = httpMock.expectOne('http://localhost:3000/data');
    expect(req.request.method).toBe('GET');
    req.flush({data: []});
  });


  it('addReminder() should POST and return data', () => {
    let data = {
      reminderDate: 5,
      archived: true,
      description: 'test'
    }
    service.addReminder(data).subscribe((res) => {
      expect(res).toEqual({ msg: 'success' });
    });

    const req = httpMock.expectOne('http://localhost:3000/data');
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });

  it('editReminder() should POST and return data', () => {
    let data = {
      id: 12345,
      reminderDate: 5,
      archived: true,
      description: 'test'
    }
    service.editReminder(data).subscribe((res) => {
      expect(res).toEqual({ msg: 'success' });
    });

    const req = httpMock.expectOne('http://localhost:3000/data');
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });
});
