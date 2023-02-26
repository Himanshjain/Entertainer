import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { EntertainerComponentComponent } from './entertainer-component/entertainer-component.component';

const routes: Routes = [
  {path: '', component: EntertainerComponentComponent},
  {path:'doctor',component:DoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
