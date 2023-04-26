import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ParkingLot } from './parking-lot.model';
@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  parking_lot_Selected !: ParkingLot;
  parking_lots !: ParkingLot[];
  readonly baseURL = 'http://localhost:3000/parking';

  constructor(private http:HttpClient) { }

  getParkingLotLists(){
    return this.http.get(this.baseURL);
  }

  postParkingLot(parking_lot: ParkingLot) {
    return this.http.post(this.baseURL, parking_lot);
  }

  putParkingLot(parking_lot: ParkingLot) {
    return this.http.put(this.baseURL + `/${parking_lot._id}`, parking_lot);
  }

  deleteParkingLot(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
