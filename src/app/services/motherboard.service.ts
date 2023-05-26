import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {

  private baseURL = "http://localhost:8080/api/v1/mobo";

  constructor(private http: HttpClient) { }

  getMotherboardList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
}
