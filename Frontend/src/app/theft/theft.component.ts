import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Theft } from '../shared/theft.model';
import { TheftService } from '../shared/theft.service';

@Component({
  selector: 'app-theft',
  templateUrl: './theft.component.html',
  styleUrls: ['./theft.component.css'],
  providers:[TheftService]
})
export class TheftComponent implements OnInit {
  searchedKeyword!: string;

  constructor(public theftService:TheftService) { }

  ngOnInit(): void {
    this.resetForm();
    this.theftRefresh();
  }

  async resetForm(form?: NgForm) {
    if (form)
      form.reset();
      this.theftService.theftSelected = {
        _id: "",
        number:""
      }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.theftService.postTheft(form.value).subscribe((res) => {
        this.resetForm(form);
        this.theftRefresh();
      });
    }
    else {
      this.theftService.putTheft(form.value).subscribe((res) => {
        this.resetForm(form);
        this.theftRefresh();
      });
    }
  }

  async theftRefresh(){
    this.theftService.getTheft().subscribe((res) => {
      this.theftService.thefts = res as Theft[];
    });
  }

  async onEdit(theft: Theft) {
    this.theftService.theftSelected = theft;
  }

  async onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.theftService.deleteTheft(_id).subscribe((res) => {
        this.theftRefresh();
        this.resetForm(form);
        location.reload();
      });
    }
  }

}
