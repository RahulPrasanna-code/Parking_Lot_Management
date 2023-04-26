import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleComponent } from './vehicle/vehicle.component';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { TheftComponent } from './theft/theft.component';  

const routes: Routes = [
  {path:'',component:VehicleComponent},
  {path:'parking',component:ParkingLotComponent},
  {path:'theft',component:TheftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
