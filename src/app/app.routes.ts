import {Route, RouterModule} from "@angular/router";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {CookOffEditComponent} from "./cook-off/cook-off-edit/cook-off-edit.component";
import {CookOffComponent} from "./cook-off/cook-off.component";
/**
 * Created by kkipp on 11/11/2016.
 */

const APP_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'cookoff',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cookoff',
    component: CookOffComponent,
    pathMatch: 'full'
  },
  {
    path: 'cookoff/edit',
    component: CookOffEditComponent
  }
];

export const routes = RouterModule.forRoot(APP_ROUTES);