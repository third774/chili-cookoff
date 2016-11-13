import { Injectable } from '@angular/core';
import {CookOff} from "../models/cookoff";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {Team} from "../models/team";
import {Judge} from "../models/judge";
import {ScoreCard} from "../models/score-card";

@Injectable()
export class CookOffService {

  cookOff: CookOff;
  cookOffDb: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.cookOffDb = this.af.database.object('/cookoff');
  }

  saveCookOff(cookOff: CookOff) {
    this.cookOff = cookOff;
    this.cookOffDb.set(JSON.stringify(this.cookOff));
  }

}
