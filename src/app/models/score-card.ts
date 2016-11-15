import {Judge} from "./judge";
import {Team} from "./team";
import {Criteria} from "./criteria";
/**
 * Created by kkipp on 11/11/2016.
 */

export interface ScoreCard {
  judge: Judge;
  criteria: Criteria[];
  complete: boolean;
}
