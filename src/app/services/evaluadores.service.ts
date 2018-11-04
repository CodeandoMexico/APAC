import { Injectable } from '@angular/core';
import { Endpoints } from '../utils/endpoints';
import { HttpClient } from '@angular/common/http';
import { Evaluador } from '../models/Evaluador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluadoresService {

  private baseUrl =  Endpoints.evaluadores;

  constructor(private http: HttpClient) { }

  getEvaluadores(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.baseUrl);
  }
}
