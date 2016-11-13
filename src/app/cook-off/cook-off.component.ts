import { Component, OnInit } from '@angular/core';
import {CookOff} from "../models/cookoff";
import {CookOffService} from "../services/cook-off.service";

@Component({
  selector: 'cc-cook-off',
  templateUrl: 'cook-off.component.html',
  styleUrls: ['cook-off.component.scss']
})
export class CookOffComponent implements OnInit {

  cookOff: CookOff = new CookOff();

  get debug(): string {
    return JSON.stringify(this.cookOff);
  }

  constructor(private cookOffService: CookOffService) { }

  ngOnInit() {
    this.cookOff = this.cookOffService.cookOff;
  }

}
