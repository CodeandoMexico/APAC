import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AdminstratorComponent } from './adminstrator/adminstrator.component';
import { AdministratorMenuComponent } from './administrator-menu/administrator-menu.component';
import {httpInterceptorProviders} from './utils/http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EvaluationComponent,
    AdminstratorComponent,
    AdministratorMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
