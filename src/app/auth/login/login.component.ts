import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {SwalService} from "../../services/swal.service";

@Component({
  selector: 'cc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private swal: SwalService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).then(success => {
      this.router.navigate(['/cookoff']);
    }).catch(() => {
      this.swal.error("Whoops!", "Invalid login credentials!");
    });

  }

}
