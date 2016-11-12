import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'cc-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;


  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
    console.log(this.signupForm);
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('submitting!', form);
  }



}
