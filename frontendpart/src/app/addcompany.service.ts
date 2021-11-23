import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Addcompany} from './addcompany';

@Injectable({
  providedIn: 'root'
})
export class AddcompanyService{
  deleteaddcompany(id: number) {
    throw new Error('Method not implemented.');
  }
 
  
  private baseURL = "http://localhost:8080/api";
 
  constructor(private httpClient: HttpClient) { }
  
  getaddcompanyList(): Observable<Addcompany[]>{
    return this.httpClient.get<Addcompany[]>(`${this.baseURL}`+'/addcompany');
}

postaddcompanyList(): Observable<Addcompany[]>{
  return this.httpClient.get<Addcompany[]>(`${this.baseURL}`);
}
  createaddcompany(addcompany: Addcompany): Observable<Object>{                                       
    return this.httpClient.post(`${this.baseURL}`+'/save-addcompany', addcompany);
  }

  getaddcompanyById(id: number): Observable<Addcompany>{
    return this.httpClient.get<Addcompany>(`${this.baseURL}`+'/addcompany'+`/${id}`);
  }

  updateAddcompany(id: number, addcompany: Addcompany): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/addcompany'+`/${id}`, addcompany);
  }
  
  deleteAddcompany(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'/addcompany'+ `/${id}`);
  }

}