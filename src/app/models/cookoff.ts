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
  inProgress = false;

  generateScoreCards() {
    this.shuffleTeams();
    this.teams.forEach(team => {
      team.scoreCards = [];
      this.judges.forEach(judge => {
        team.scoreCards.push({
          judge: judge,
          criteria: this.criteria,
          complete: false
        });
      });
    });
  }

  shuffleTeams() {
  for (let i = this.teams.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [this.teams[i - 1], this.teams[j]] = [this.teams[j], this.teams[i - 1]];
  }
}

  public static fromModel(model: any): CookOff {
    let cookOff = new CookOff();
    cookOff.teams = model.teams;
    cookOff.judges = model.judges;
    cookOff.criteria = model.criteria;
    cookOff.inProgress = model.inProgress;
    return cookOff;
  }

}
