import {ScoreCard} from "./score-card";
/**
 * Created by kkipp on 11/11/2016.
 */

export interface Team {
  members: string[];
  scoreCards: ScoreCard[];
  name: string;
}
