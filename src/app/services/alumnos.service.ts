import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, RequestMethod} from '@angular/http';
import {Endpoints} from '../utils/endpoints';
import { NuevoAlumno } from '../models/NuevoAlumno';
import { Alumno } from '../models/Alumno';
import { AlumnoXCentro } from '../models/AlumnoXCentro';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private baseUrl =  Endpoints.Alumnos;

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseUrl);
  }

  getAlumnosPorCentro(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(Endpoints.Alumnosxcentro);
  }

  creaAlumno(nuevoAlumno: NuevoAlumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.baseUrl, nuevoAlumno);
  }

  actualizaAlumno(alumno: Alumno ): Observable<Alumno> {
    return this.http.put<Alumno>(this.baseUrl, alumno);
  }

  actualizaCentro(nuevoCentro: AlumnoXCentro): Observable<AlumnoXCentro> {
   return this.http.post<AlumnoXCentro>(Endpoints.Alumnosxcentro, nuevoCentro);
  }

  eliminarAlumno(alumno: Alumno ): Observable<Alumno> {
    return this.http.request<Alumno>('DELETE', this.baseUrl, {
        body: alumno
        });
  }
}
