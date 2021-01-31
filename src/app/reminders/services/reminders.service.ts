import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderModel } from '../state/reminders.model';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {
  fetchViaHttp() {
    throw new Error('Method not implemented.');
  }
  url = 'http://localhost:3000/data';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private httpClient: HttpClient){}

  getRemindersList(): Observable<any>{
    return this.httpClient.get<any[]>(this.url);
  }
  editReminder(data: ReminderModel): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any[]>(this.url, data, {headers});
  }
  addReminder(data: ReminderModel): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any[]>(this.url, data, {headers});
  }
}
