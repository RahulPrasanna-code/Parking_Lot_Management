import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Vehicle } from './vehicle.model';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleSelected !: Vehicle;
  vehicles !: Vehicle[];
  readonly baseURL = 'http://localhost:3000/vehicle';

  constructor(private http:HttpClient) { }

  getVehicleList(){
    return this.http.get(this.baseURL);
  }

  deleteVehicle(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
