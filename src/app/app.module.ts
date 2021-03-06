import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { MathComponent } from './math/math.component';
import { FormPoster } from './services/form-poster.service';


@NgModule({
  declarations: [
    AppComponent,
    UserPreferencesComponent,
    SelectUserComponent,
    MathComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: SelectUserComponent },
      { path: 'settings', component: UserPreferencesComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
    ],
  providers: [FormPoster],
  bootstrap: [AppComponent]
})
export class AppModule { }
