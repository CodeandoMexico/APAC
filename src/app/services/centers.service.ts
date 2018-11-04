import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoints } from '../utils/endpoints';
import { Observable } from 'rxjs';
import { Centro } from '../models/Centro';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  private baseUrl =  Endpoints.Centros;

  constructor(private http: HttpClient) { }

  getCenters(): Observable<Centro[]> {
    return this.http.get<Centro[]>(this.baseUrl);
  }
}
