import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {CookOffEditComponent} from "./cook-off/cook-off-edit/cook-off-edit.component";
import {CookOffComponent} from "./cook-off/cook-off.component";
import {JudgingComponent} from "./judging/judging.component";
import {AuthGuard} from "./shared/auth-guard";
import {ResultsComponent} from "./results/results.component";
/**
 * Created by kkipp on 11/11/2016.
 */

const APP_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'cookoff',
    pathMatch: 'full'
  },
  // {
  //   path: 'signup',
  //   component: SignUpComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cookoff',
    component: CookOffComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'cookoff/edit',
    component: CookOffEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'judging',
    component: JudgingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [AuthGuard]
  }
];

export const routes = RouterModule.forRoot(APP_ROUTES);
