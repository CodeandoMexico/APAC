import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AdminstratorComponent } from './adminstrator/adminstrator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'administrator', component: AdminstratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
