import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Endpoints } from '../utils/endpoints';
import { Usuario } from '../models/Usuario';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private baseUrl =  Endpoints.Seguridad;

  constructor(private http: HttpClient) { }

  Login(usuario: String, password: String): Observable<Usuario> {
    const body = {
      'user': usuario,
      'password': password
    };
    return this.http.post<Usuario>(this.baseUrl, body)
    .pipe(
      catchError(this.handleError<Usuario>(`autorizar usuario=${usuario}`)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed to call`);
      return of(result as T);
    };
  }
}
