import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { IndexModule } from './views/index.module';
import { IndexComponent } from './views/index.component';
import { TournamentModule } from "./views/tournament/tournament.module";
import { PartialsModule } from './views/partials/partials.module';
import { ListComponent } from './views/tournament/list.component';
import { AuthModule } from "./views/auth/auth.module";
import { SignInComponent } from './views/auth/signin.component';
import { SignUpComponent } from './views/auth/signup.component';
import { AuthGuard } from './views/auth/auth.guard';
import { AddEditComponent } from './views/tournament/add_edit.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    TournamentModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "tournament/list", component: ListComponent },
      { path: "tournament/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "tournament/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "users/signin", component: SignInComponent },
      { path: "users/signup", component: SignUpComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
