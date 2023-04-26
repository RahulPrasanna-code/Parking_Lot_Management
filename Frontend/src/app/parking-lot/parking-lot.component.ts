import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ParkingLot } from '../shared/parking-lot.model';
import { ParkingLotService } from '../shared/parking-lot.service';
import { DistrictService } from '../shared/district.service';
import { District } from '../shared/district.model';

declare var M:any;

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css'],
  providers:[ParkingLotService,DistrictService]
})
export class ParkingLotComponent implements OnInit {
  searchedKeyword!: string;
  searchedDistrict !:string;

  constructor(public parkinglotService:ParkingLotService,public districtService:DistrictService) { }

  async ngOnInit() {
    this.resetForm();
    this.parkingLotRefresh();
    this.districtRefresh();
  }

  async resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.parkinglotService.parking_lot_Selected = {
      _id: "",
      name: "",
      contact: 0,
      address: "",
      district:"",
      user_id:""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.parkinglotService.postParkingLot(form.value).subscribe((res) => {
        M.toast("show");
        this.resetForm(form);
        this.parkingLotRefresh();
      });
    }
    else {
      this.parkinglotService.putParkingLot(form.value).subscribe((res) => {
        this.resetForm(form);
        this.parkingLotRefresh();
        M.toast("show");
      });
    }
  }

  async parkingLotRefresh(){
    this.parkinglotService.getParkingLotLists().subscribe((res) => {
      this.parkinglotService.parking_lots = res as ParkingLot[];
    });
  }

  async districtRefresh(){
    this.districtService.getDistrictLists().subscribe((res) => {
      this.districtService.districts = res as District[];
    });
  }

  async onEdit(parking_lot: ParkingLot) {
    this.parkinglotService.parking_lot_Selected = parking_lot;
  }

  async onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.parkinglotService.deleteParkingLot(_id).subscribe((res) => {
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        this.parkingLotRefresh();
        this.resetForm(form);
        location.reload();
      });
    }
  }
}
