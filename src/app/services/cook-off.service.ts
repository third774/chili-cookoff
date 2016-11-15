import { Injectable } from '@angular/core';
import {CookOff} from "../models/cookoff";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {Team} from "../models/team";
import {Judge} from "../models/judge";
import {ScoreCard} from "../models/score-card";
import {Subscription, Observable, Subject} from "rxjs";

@Injectable()
export class CookOffService {

  private cookOffSubject: Subject<any>;
  private _cookOff: CookOff;
  public get cookOff() : CookOff {
    return this._cookOff || new CookOff();
  }
  cookOffDb: FirebaseObjectObservable<any>;
  cookOff$: Observable<CookOff>;

  constructor(private af: AngularFire) {
    this.cookOffSubject = new Subject();
    this.cookOffDb = this.af.database.object('/cookoff');
    this.cookOffDb.subscribe(cookOff => {
      if (cookOff.$exists()) {
        this._cookOff = CookOff.fromModel(cookOff);
      } else {
        this.saveCookOff(this.cookOff);
      }
      this.cookOffSubject.next(this.cookOff);
    });
    this.cookOff$ = <Observable<CookOff>>this.cookOffSubject.asObservable();
    this.cookOffSubject.next(this.cookOff);
  }

  saveCookOff(cookOff: CookOff) {
    this._cookOff = cookOff;
    const model = JSON.parse(JSON.stringify(cookOff));
    console.log('saving: ', model);
    this.cookOffDb.set(model);
  }

}
