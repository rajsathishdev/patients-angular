import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';


const routes: Routes = [
   {
     path: 'list',
     component: PatientsListComponent
   },
   {
     path: 'add',
     component: AddPatientComponent
   },
   {
     path: 'edit',
     component: EditPatientComponent
   },
   {
     path: '',
     redirectTo: '/list',
     pathMatch: 'full'
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
