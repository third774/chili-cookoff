import {Component, OnInit, Input} from "@angular/core";
import {ScoreCard} from "../models/score-card";
import {CookOffService} from "../services/cook-off.service";

@Component({
  selector: 'cc-judge-score-card',
  templateUrl: './judge-score-card.component.html',
  styleUrls: ['./judge-score-card.component.scss']
})
export class JudgeScoreCardComponent implements OnInit {

  @Input() scoreCard: ScoreCard;

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
  }

  onSubmit() {

    this.scoreCard.complete = true;
    this.cookOffService.saveCookOff(this.cookOffService.cookOff);
  }

}
