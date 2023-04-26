import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { TheftComponent } from './theft/theft.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ParkingLotComponent,
    TheftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
