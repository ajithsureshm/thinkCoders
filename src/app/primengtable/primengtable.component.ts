import { Component, OnInit } from '@angular/core';
import { ApicallService } from './../apicall.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, RequiredValidator, Validators } from "@angular/forms";

@Component({
  selector: 'app-primengtable',
  templateUrl: './primengtable.component.html',
  styleUrls: ['./primengtable.component.scss']
})
export class PrimengtableComponent implements OnInit {
  getTasks: any
  selectedName: any;
  selectedForNormal: any
  closeResult: string = '';
  editForm!: any;
  editRes: any
  specificUserId: any

  constructor(private Apicall: ApicallService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.editForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      fname: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
    })

    this.getAllUsers()
  }

  getAllUsers() {
    this.Apicall.tableListing()
      .then((res) => {
        // console.log(res);
        this.getTasks = res
        console.log(this.getTasks);
      }).catch((err) => {
        console.log(err);
      })
  }

  customSort(event: any) {
    // event = this.getTasks
    console.log(event);
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

  highlightRow(emp: any) {
    this.selectedName = emp.name;
  }

  normalRow(emp: any) {
    this.selectedForNormal = emp.name;
  }

  getUserID(id: any) {
    console.log(id);
  }

  openXl(content: any, id: any) {
    this.specificUserId = id
    this.modalService.open(content, { size: "lg" });
    this.Apicall.getSpecificUserDetails(id)
      .then((res) => {
        console.log(res);
        this.editRes = res
        this.editForm.setValue({
          email: this.editRes.email,
          fname: this.editRes.name,
          gender: this.editRes.gender,
          status: this.editRes.status
        })
      }).catch((err) => {
        console.log(err);
      })
  }


  updateGetUser() {
    this.Apicall.updateGetUser(this.specificUserId, this.editForm.value.email, this.editForm.value.fname, this.editForm.value.gender, this.editForm.value.status)
      .then((res) => {
        console.log(res);
        location.reload()
      }).catch((err) => {
        console.log(err);
      })
  }

  deleteGetUser() {
    this.Apicall.deleteGetUser(this.specificUserId)
      .then((res) => {
        console.log(res);
        location.reload()
      }).catch((err) => {
        console.log(err);
      })
  }
 
}
