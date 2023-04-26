import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { District } from './district.model';
import { ParkingLot } from './parking-lot.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  district_selected !: District;
  districts !: District[];
  readonly baseURL = 'http://localhost:3000/district';

  constructor(private http:HttpClient) { }

  getDistrictLists(){
    return this.http.get(this.baseURL);
  }

}
