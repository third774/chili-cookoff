import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  canActivate() {
    return this.afAuth.map(auth => {
      if (auth && auth.auth && !(<any>auth.auth).isAnonymous) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }).first();
  }

}
