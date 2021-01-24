import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {
  url = 'http://localhost:3000/data';
  constructor(private httpClient: HttpClient){}

  getRemindersList(): Observable<any>{
    return this.httpClient.get<any[]>(this.url);
  }
}
