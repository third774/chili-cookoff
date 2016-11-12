import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, FirebaseAuthState} from "angularfire2";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  auth: FirebaseAuthState;
  authSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.authSubscription = this.afAuth.subscribe(auth => {
      this.auth = auth;
    });
  }

  onLogOut() {
    this.afAuth.logout();
  }

}
