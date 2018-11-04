import { Component, OnInit } from '@angular/core';
import { AlumnosService} from '../services/alumnos.service';
import { SecurityService } from '../services/security.service';
import { Usuario } from '../models/Usuario';
import { CentersService } from '../services/centers.service';
import { EvaluadoresService } from '../services/evaluadores.service';
@Component({
  selector: 'app-adminstrator',
  templateUrl: './adminstrator.component.html',
  styleUrls: ['./adminstrator.component.sass']
})
export class AdminstratorComponent implements OnInit {

  constructor(private securityService: SecurityService,
              private centersService: CentersService,
              private alumnosService: AlumnosService,
              private evaluadoresService: EvaluadoresService) { }

  ngOnInit() {
    this.login();
    this.getCenters();
    this.getAlumnos();
    this.getAlumnosXCentro();
    this.getEvaluadores();
  }

  login(): void {
    this.securityService.Login('admin123', '4p4c0')
    .subscribe(usuario => this.ValidateLogin(usuario));
  }

  getCenters(): void {
    console.log('----------- centros---------------');
    this.centersService.getCenters()
    .subscribe((obj) => this.LogResponse(obj));
  }

  getAlumnos(): void {
    console.log('----------- alumnos ---------------');
    this.alumnosService.getAlumnos()
    .subscribe((obj) => this.LogResponse(obj));
  }
  getAlumnosXCentro(): void {
    console.log('----------- alumnos x centro ---------------');
    this.alumnosService.getAlumnosPorCentro()
    .subscribe((obj) => this.LogResponse(obj));
  }

  getEvaluadores(): void {
    console.log('----------- evaluadores ---------------');
    this.evaluadoresService.getEvaluadores()
    .subscribe((obj) => this.LogResponse(obj));
  }

  ValidateLogin(usuario: Usuario): void {
    if (usuario) {
       //goto evaluador
    } else {
      //todo error auth; 
    }
  }
  LogResponse(obj): void {
    for ( let i = 0, j = obj.length; i < j ; i ++) {
      console.log(obj[i]);
    }
  }

}
