import {Component, OnInit, Input} from "@angular/core";
import {ScoreCard} from "../models/score-card";
import {CookOffService} from "../services/cook-off.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MinNumber, MaxNumber} from "./custom-validators";
import {Criteria} from "../models/criteria";

@Component({
  selector: 'cc-judge-score-card',
  templateUrl: './judge-score-card.component.html',
  styleUrls: ['./judge-score-card.component.scss']
})
export class JudgeScoreCardComponent implements OnInit {

  @Input() scoreCard: ScoreCard;
  scoreCardForm: FormGroup;

  private get allCriteriaHaveValues(): boolean {
    let result = true;
    this.scoreCard.criteria.forEach(criteria => {
      if (!criteria.rating) {
        result = false;
      }
    });
    return result;
  }

  constructor(private cookOffService: CookOffService) {
  }

  ngOnInit() {
    this.scoreCardForm = new FormGroup(this.scoreCard.criteria.reduce((config: any, criteria: Criteria) => {
      config[criteria.name] = new FormControl('', [MinNumber(1), MaxNumber(10)]);
      return config;
    }, {}));
  }

  onSubmit() {
    this.scoreCard.complete = true;
    this.scoreCard.criteria.forEach(criteria => criteria.rating = this.scoreCardForm.controls[criteria.name].value);
    this.cookOffService.saveCookOff(this.cookOffService.cookOff);
  }

}
