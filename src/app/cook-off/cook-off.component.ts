import {Component, OnInit, OnDestroy} from "@angular/core";
import {CookOff} from "../models/cookoff";
import {CookOffService} from "../services/cook-off.service";
import {SwalService} from "../services/swal.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'cc-cook-off',
  templateUrl: 'cook-off.component.html',
  styleUrls: ['cook-off.component.scss']
})
export class CookOffComponent implements OnInit, OnDestroy {

  cookOff: CookOff = new CookOff();
  cookOffChangedSubscription: Subscription;

  get debug(): string {
    return JSON.stringify(this.cookOff);
  }

  constructor(
    private cookOffService: CookOffService,
    private swal: SwalService,
    private router: Router) {
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

  onBegin() {
    this.swal.warn(
      "Are you sure?",
      "Starting the Cook-Off will lock all judges, teams, and criteria into place, and scorecards will be generated.",
      "Begin the Cook-Off!")
      .then(() => {
        this.cookOffService.cookOff.generateScoreCards();
        this.cookOffService.saveCookOff(this.cookOff);
        this.router.navigate(['/judging']);
      }).catch(() => {
    });
  }

}
