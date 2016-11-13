import {Component, OnInit} from "@angular/core";
import {CookOff} from "../../models/cookoff";
import {CookOffService} from "../../services/cook-off.service";

@Component({
  selector: 'cc-cook-off-edit',
  templateUrl: 'cook-off-edit.component.html',
  styleUrls: ['cook-off-edit.component.scss']
})
export class CookOffEditComponent implements OnInit {

  cookOff: CookOff = new CookOff();

  constructor(private cookOffService: CookOffService) {
  }

  ngOnInit() {
    this.cookOffService.cookOffDb.subscribe(cookOff => {
      if (cookOff.$value) {
        this.cookOff = CookOff.fromModel(JSON.parse(<string>cookOff.$value));
        this.cookOffService.cookOff = this.cookOff;
      } else {
        this.cookOff = new CookOff();
        this.cookOffService.saveCookOff(this.cookOff);
      }
    });
  }

  onBegin() {
    this.cookOff.generateScoreCards();
    this.cookOffService.saveCookOff(this.cookOff);
  }

  onAddJudge() {
    this.cookOff.judges.push({
      name: ""
    });
  }

  onRemoveJudge(i: number) {
    this.cookOff.judges.splice(i, 1);
  }

  onAddTeam() {
    this.cookOff.teams.push({
      name: "",
      members: [],
      scoreCards: []
    });
  }

  onRemoveTeam(i: number) {
    this.cookOff.teams.splice(i, 1);
  }

  onAddCriteria() {
    this.cookOff.criteria.push({
      name: ""
    });
  }

  onRemoveCriteria(i: number) {
    this.cookOff.criteria.splice(i, 1);
  }

}
