import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CPU } from '../cpu'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  lstCpu:CPU[];

  private baseURL = "http://localhost:8080/api/v1/cpu";

  constructor(private http: HttpClient) { }

  getCPUList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
}
