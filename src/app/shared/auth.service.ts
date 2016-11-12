import {Injectable} from "@angular/core";
import {AngularFireAuth, AuthMethods, AuthProviders} from "angularfire2";
import {User} from "../models/user";
import {Observable, Subject} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private af: AngularFireAuth) {
  }

  signUp(user: User) {
    return this.af.createUser({
      email: user.email,
      password: user.password
    });
  }

  login(user: User) {
    console.log('logging in with: ', user);
    return this.af.login({
      email: user.email,
      password: user.password
    }, {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    });
  }

}
