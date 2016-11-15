import {Component, OnInit, OnDestroy} from '@angular/core';
import {CookOff} from "../models/cookoff";
import {CookOffService} from "../services/cook-off.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cc-judging',
  templateUrl: './judging.component.html',
  styleUrls: ['./judging.component.scss']
})
export class JudgingComponent implements OnInit, OnDestroy {

  cookOff: CookOff;
  cookOffUpdatedSub: Subscription;

  constructor(private cookOffService: CookOffService) { }

  ngOnInit() {
    this.cookOff = this.cookOffService.cookOff;
    this.cookOffUpdatedSub = this.cookOffService.cookOff$.subscribe(() => {
      this.cookOff = this.cookOffService.cookOff;
    });
  }

  ngOnDestroy() {
    this.cookOffUpdatedSub.unsubscribe();
  }

}
