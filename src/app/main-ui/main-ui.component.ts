import { ApicallService } from './../apicall.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit {

  constructor(private Apicall: ApicallService) { }

  ngOnInit(): void {
  }

  

}
