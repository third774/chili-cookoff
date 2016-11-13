import {Team} from "./team";
import {Judge} from "./judge";
import {Criteria} from "./criteria";
/**
 * Created by kkipp on 11/12/2016.
 */

export class CookOff {
  teams: Team[] = [];
  judges: Judge[] = [];
  criteria: Criteria[] = [];

  generateScoreCards() {
    this.teams.forEach(team => {
      this.judges.forEach(judge => {
        team.scoreCards.push({
          judge: judge,
          criteria: this.criteria
        });
      });
    });
  }

  public static fromModel(model: any): CookOff {
    let cookOff = new CookOff();
    cookOff.teams = model.teams;
    cookOff.judges = model.judges;
    cookOff.criteria = model.criteria;
    return cookOff;
  }

}
