import {Component, OnInit, OnDestroy} from "@angular/core";
import {CookOff} from "../../models/cookoff";
import {CookOffService} from "../../services/cook-off.service";
import {SwalService} from "../../services/swal.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'cc-cook-off-edit',
  templateUrl: 'cook-off-edit.component.html',
  styleUrls: ['cook-off-edit.component.scss']
})
export class CookOffEditComponent implements OnInit, OnDestroy {

  cookOff: CookOff = new CookOff();
  cookOffChangedSub: Subscription;

  constructor(private cookOffService: CookOffService,
              private swal: SwalService,
              private router: Router) {
  }

  ngOnInit() {
    this.cookOff = this.cookOffService.cookOff;
    this.cookOffChangedSub = this.cookOffService.cookOff$.subscribe(() => {
      this.cookOff = this.cookOffService.cookOff;
    });
  }

  ngOnDestroy() {
    this.cookOffChangedSub.unsubscribe();
  }

  onSave() {
    this.cookOffService.saveCookOff(this.cookOff);
    this.swal.success("Success!", "Your changes have been saved.").then(() => {
      this.router.navigate(['/']);
    });
  }

  onAddJudge() {
    this.cookOff.judges.push({
      name: "",
      email: ""
    });
  }

  onRemoveJudge(i: number) {
    this.swal.warn().then(() => this.cookOff.judges.splice(i, 1)).catch(() => {
    });
  }

  onAddTeam() {
    this.cookOff.teams.push({
      name: "",
      members: [],
      scoreCards: []
    });
  }

  onRemoveTeam(i: number) {
    this.swal.warn().then(() => this.cookOff.teams.splice(i, 1)).catch(() => {
    });
  }

  onAddCriteria() {
    this.cookOff.criteria.push({
      name: ""
    });
  }

  onRemoveCriteria(i: number) {
    this.swal.warn().then(() => this.cookOff.criteria.splice(i, 1)).catch(() => {
    });
  }

}
