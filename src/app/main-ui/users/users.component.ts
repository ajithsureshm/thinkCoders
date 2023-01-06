import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApicallService } from 'src/app/apicall.service';
import { FormControl, FormGroup, RequiredValidator, Validators } from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  addForm!: any

  constructor(private Apicall: ApicallService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      addemail: new FormControl("", [Validators.required]),
      addname: new FormControl("", [Validators.required]),
      addgender: new FormControl("", [Validators.required]),
      addstatus: new FormControl("", [Validators.required]),
    })
  }

  openAddModal(addcontent: any) {
    this.modalService.open(addcontent, { size: "lg" });
  }

  addUser() {
    this.Apicall.addUser(this.addForm.value.addemail, this.addForm.value.addname, this.addForm.value.addgender, this.addForm.value.addstatus)
      .then((res) => {
        console.log(res);
        location.reload()
      }).catch((err) => {
        console.log(err);
      })
  }

}
