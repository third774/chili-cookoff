import {Judge} from "./judge";
import {Team} from "./team";
import {Criteria} from "./criteria";
/**
 * Created by kkipp on 11/11/2016.
 */

export class ScoreCard {
  constructor(private judge: Judge, private team: Team) {

  }

  criteria: Criteria[];

  get average(): number {
    let n = 0;
    this.criteria.forEach(criteria => n += criteria.rating);
    return n / this.criteria.length;
  }

}
