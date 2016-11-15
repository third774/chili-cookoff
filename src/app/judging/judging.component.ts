import {Component, OnInit, OnDestroy} from '@angular/core';
import {CookOff} from "../models/cookoff";
import {CookOffService} from "../services/cook-off.service";
import {Subscription} from "rxjs";
import Timer = NodeJS.Timer;
import {Router} from "@angular/router";

@Component({
  selector: 'cc-judging',
  templateUrl: './judging.component.html',
  styleUrls: ['./judging.component.scss']
})
export class JudgingComponent implements OnInit, OnDestroy {

  cookOff: CookOff;
  cookOffUpdatedSub: Subscription;

  nameClickTimeout: Timer;
  nameClickCounter: number = 0;
  showNames = false;

  get allScoreCardsComplete(): boolean {
    let result = true;
    this.cookOff.teams.forEach(team => {
      team.scoreCards.forEach(scoreCard => {
        if (!scoreCard.complete) {
          result = false;
        }
      })
    });
    return result;
  }

  constructor(private cookOffService: CookOffService, private router: Router) { }

  ngOnInit() {
    this.cookOff = this.cookOffService.cookOff;
    this.cookOffUpdatedSub = this.cookOffService.cookOff$.subscribe(() => {
      this.cookOff = this.cookOffService.cookOff;
    });
  }

  ngOnDestroy() {
    this.cookOffUpdatedSub.unsubscribe();
  }

  onShowResults() {
    this.cookOff.calculateResults();
    this.cookOff.complete = true;
    this.cookOffService.saveCookOff(this.cookOff);
    this.router.navigate(['/results']);
  }

  onClickName() {
    this.nameClickCounter++;
    clearTimeout(this.nameClickTimeout);
    this.nameClickTimeout = setTimeout(() => {
      this.nameClickCounter = 0;
    }, 500);
    if (this.nameClickCounter > 9) {
      this.showNames = true;
      setTimeout(() => {
        this.showNames = false;
      }, 2000);
    }
  }

}
