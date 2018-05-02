import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { MathComponent } from './math/math.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPreferencesComponent,
    SelectUserComponent,
    MathComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
