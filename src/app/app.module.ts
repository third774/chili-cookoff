import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {routes} from "./app.routes";
import { SmallCenterPanelComponent } from './shared/small-panel/small-center-panel.component';
import {AngularFireModule} from "angularfire2";
import {FireBaseConfig} from "./fire-base-config";
import {AuthService} from "./shared/auth.service";
import { CookOffComponent } from './cook-off/cook-off.component';
import {CookOffService} from "./services/cook-off.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    SmallCenterPanelComponent,
    CookOffComponent
  ],
  imports: [
    AngularFireModule.initializeApp(FireBaseConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [AuthService, CookOffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
