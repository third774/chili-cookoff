import {Component, OnInit, OnDestroy} from "@angular/core";
import {CookOffService} from "../services/cook-off.service";
import {CookOff} from "../models/cookoff";
import {Subscription} from "rxjs";

@Component({
  selector: 'cc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  cookOff: CookOff;
  cookOffChangedSubscription: Subscription;

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
