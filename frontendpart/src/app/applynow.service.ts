import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Applynow } from './applynow';

@Injectable({
  providedIn: 'root'
})
export class ApplynowService {
  updateapplynow(_id: number, _applynow: Applynow) {
    throw new Error('Method not implemented.');
  }

  
  private baseURL = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  getApplynowList(): Observable<Applynow[]>{
    return this.httpClient.get<Applynow[]>(`${this.baseURL}`+'/applynow');
}


postApplynowList(): Observable<Applynow[]>{
  return this.httpClient.get<Applynow[]>(`${this.baseURL}`);
}
createapplying(applynow: Applynow): Observable<Object>{                                       ///////student.service.ts
  return this.httpClient.post(`${this.baseURL}`+'/save-applynow', applynow);
}

getApplynowById(id: number): Observable<Applynow>{
  return this.httpClient.get<Applynow>(`${this.baseURL}`+'/applynow'+`/${id}`);
}

updateApplynow(id: number, applynow: Applynow): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}`+'/applynow'+`/${id}`, applynow);
}

deleteapplynow(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'/applynow'+`/${id}`);
}

}