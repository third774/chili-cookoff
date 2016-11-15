import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Team} from "../models/team";

@Component({
  selector: 'cc-team-score-cards',
  templateUrl: './team-score-cards.component.html',
  styleUrls: ['./team-score-cards.component.scss']
})
export class TeamScoreCardsComponent implements OnInit {

  @Input() team: Team;
  @Input() index: number;

  @Output() scoreCardSaved = new EventEmitter<any>();



  constructor() { }

  ngOnInit() {
  }

  onCompleted() {
    this.scoreCardSaved.emit();
  }

}
