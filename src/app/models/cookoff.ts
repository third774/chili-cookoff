import {Team} from "./team";
import {Judge} from "./judge";
import {ScoreCard} from "./score-card";
/**
 * Created by kkipp on 11/12/2016.
 */

export class CookOff {
  teams: Team[] = [];
  judges: Judge[] = [];
  //scoreCards: ScoreCard[];

  generateScoreCards() {
    this.teams.forEach(team => {
      this.judges.forEach(judge => {
        team.scoreCards.push(new ScoreCard(judge));
      })
    });
  }

}
