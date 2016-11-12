import { Component, OnInit } from '@angular/core';
import {CookOff} from "../models/cookoff";
import {Judge} from "../models/judge";
import {Team} from "../models/team";
import {CookOffService} from "../services/cook-off.service";

@Component({
  selector: 'cc-cook-off',
  templateUrl: './cook-off.component.html',
  styleUrls: ['./cook-off.component.scss']
})
export class CookOffComponent implements OnInit {

  cookOff: CookOff = new CookOff();

  constructor(private cookOffService: CookOffService) { }

  ngOnInit() {
  }

  onBegin() {
    this.cookOff.generateScoreCards();
    this.cookOffService.saveCookOff(this.cookOff);
  }

  onAddJudge() {
    this.cookOff.judges.push(new Judge());
  }

  onRemoveJudge(i: number) {
    this.cookOff.judges.splice(i, 1);
  }

  onAddTeam() {
    this.cookOff.teams.push(new Team());
  }

  onRemoveTeam(i: number) {
    this.cookOff.teams.splice(i, 1);
  }

}
