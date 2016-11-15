import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, FirebaseAuthState} from "angularfire2";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  auth: FirebaseAuthState;
  authSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.authSubscription = this.afAuth.subscribe(auth => {
      this.auth = auth;
    });
  }

  onLogOut() {
    this.afAuth.logout();
    this.router.navigate(['/login']);
  }

}
