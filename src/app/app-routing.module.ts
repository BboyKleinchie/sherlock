import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoutMissionComponent } from './scoutmissions/scoutmission.component';

const routes: Routes = [
  {path: 'scoutmission', component: ScoutMissionComponent},
  {path: '', pathMatch: 'full', redirectTo: 'scoutmission'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
