import { Injectable } from '@angular/core';
import {CookOff} from "../models/cookoff";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class CookOffService {

  cookOff: CookOff;
  cookOffDb: FirebaseObjectObservable<CookOff>;

  constructor(private af: AngularFire) {
    this.cookOffDb = this.af.database.object('/cookoff');
  }

  saveCookOff(cookOff: CookOff) {
    this.cookOff = cookOff;
    // console.log(cookOff);
    // console.log(JSON.stringify(cookOff));
    this.cookOffDb.set(JSON.stringify(this.cookOff));
  }

}
