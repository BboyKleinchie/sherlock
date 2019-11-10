import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoutMissionViewComponent } from './scoutmissions-view/scoutmission-view.component';

const routes: Routes = [
  {path: 'scoutmission-view', component: ScoutMissionViewComponent},
  {path: '', pathMatch: 'full', redirectTo: 'scoutmission-view'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
