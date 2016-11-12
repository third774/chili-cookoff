import {ScoreCard} from "./score-card";
/**
 * Created by kkipp on 11/11/2016.
 */

export class Team {
  members: string[];
  scoreCards: ScoreCard[] = [];

  constructor(public name: string = "") {
  }

  average() {

  }

}
