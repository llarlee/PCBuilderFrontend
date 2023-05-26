import { Injectable } from '@angular/core';
import { RAM } from '../ram';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  lstram:RAM[];

  private baseURL = "http://localhost:8080/api/v1/ram";

  constructor(private http: HttpClient) { }

  getCPUList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
}
