import {Component, OnInit, OnDestroy} from "@angular/core";
import {CookOffService} from "../services/cook-off.service";
import {CookOff} from "../models/cookoff";
import {Subscription} from "rxjs";
import {Team} from "../models/team";

@Component({
  selector: 'cc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  cookOff: CookOff;
  cookOffChangedSubscription: Subscription;

  get winningTeam() {
    return this.cookOff.teams.reduce((prev: Team, cur: Team) => {
      return (prev.teamAverage > cur.teamAverage) ? prev : cur;
    });
  }

  constructor(private cookOffService: CookOffService) {

  }

  ngOnInit() {
    this.cookOff = this.cookOffService.cookOff;
    this.cookOffChangedSubscription = this.cookOffService.cookOff$.subscribe(() => {
      this.cookOff = this.cookOffService.cookOff;
    });
  }

  ngOnDestroy() {
    this.cookOffChangedSubscription.unsubscribe();
  }

}
