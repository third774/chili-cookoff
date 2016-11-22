import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Judge} from "../../../models/judge";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {mailFormat} from "../../../shared/custom-validators";

@Component({
  selector: 'cc-judge-form',
  templateUrl: './judge-form.component.html',
  styleUrls: ['./judge-form.component.scss']
})
export class JudgeFormComponent implements OnInit {

  @Input() judge: Judge;
  @Input() index: number;
  @Output() judgeRemoved = new EventEmitter<number>();
  judgeForm: FormGroup;
  editing: boolean;

  constructor() {
  }

  ngOnInit() {
    this.editing = !(!!this.judge.name && !!this.judge.email);
    this.judgeForm = new FormGroup({
      name: new FormControl({value: this.judge.name, disabled: !this.editing}, Validators.required),
      email: new FormControl(
        {value: this.judge.email, disabled: !this.editing},
        [
          Validators.required,
          mailFormat
        ]
      )
    });
  }

  onRemoveJudge() {
    this.judgeRemoved.emit(this.index);
  }

  onSubmit() {
    this.judge.name = this.judgeForm.controls['name'].value;
    this.judge.email = this.judgeForm.controls['email'].value;
    this.editing = false;
    this.disableControls();
  }

  onEdit() {
    this.editing = true;
    this.enableControls();
  }

  onCancel() {
    this.judgeForm.reset();
    for(let property in this.judge) {
      this.judgeForm.controls[property].setValue(this.judge[property]);
    }
    this.editing = false;
    this.disableControls();
  }

  enableControls() {
    for(let control in this.judgeForm.controls) {
      this.judgeForm.controls[control].enable();
    }
  }

  disableControls() {
    for(let control in this.judgeForm.controls) {
      this.judgeForm.controls[control].disable();
    }
  }

}
