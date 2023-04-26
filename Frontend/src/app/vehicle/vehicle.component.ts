import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { VehicleService } from '../shared/vehicle.service';
import { Vehicle } from '../shared/vehicle.model';

declare var M:any;

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers:[VehicleService]
})
export class VehicleComponent implements OnInit {

  searchedKeyword!: string;

  constructor(public vehicleService:VehicleService) {}

  ngOnInit() {
    this.refreshVehicleList();
  }

  refreshVehicleList() {
    this.vehicleService.getVehicleList().subscribe((res) => {
      this.vehicleService.vehicles = res as Vehicle[];
    });
  }

  async onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.vehicleService.deleteVehicle(_id).subscribe((res) => {
        this.refreshVehicleList();
        location.reload();
      });
    }
  }

}
