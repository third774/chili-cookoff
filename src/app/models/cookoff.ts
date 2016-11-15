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
  complete = false;

  generateScoreCards() {
    this.shuffleTeams();
    this.teams.forEach(team => {
      team.scoreCards = [];
      this.judges.forEach(judge => {
        team.scoreCards.push({
          judge: judge,
          criteria: JSON.parse(JSON.stringify(this.criteria)),
          complete: false
        });
      });
    });
  }

  calculateResults() {
    this.teams.forEach(team => {
      team.scoreCards.forEach(scoreCard => {
        scoreCard.judgesAverage =
          scoreCard.criteria.reduce((sum, criteria) => {return sum += criteria.rating}, 0) / scoreCard.criteria.length;
      });
      team.teamAverage = team.scoreCards.reduce((sum, scoreCard) => {return sum += scoreCard.judgesAverage}, 0) / team.scoreCards.length;
    });

    this.teams.sort((a: Team, b: Team) => {
      if (a.teamAverage > b.teamAverage) {
        return -1
      }
      if (a.teamAverage < b.teamAverage) {
        return 1;
      }
      return 0;
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
    cookOff.teams = model.teams || [];
    cookOff.judges = model.judges || [];
    cookOff.criteria = model.criteria || [];
    cookOff.inProgress = model.inProgress || false;
    cookOff.complete = model.complete || false;
    return cookOff;
  }

}
