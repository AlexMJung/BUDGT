import { Component, OnInit, Input } from '@angular/core';

import { User } from '../model/user';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {
  model = new User();
  currency = [];
  hasSelectError = false;
  mathWarning: string;

  constructor(private formPoster: FormPoster) {
    this.formPoster.getCurrencyTypes()
      .subscribe(
        data => this.currency = data.currencyTypes,
        err => console.log('get error: ', err)
      );
  }

submitForm(form: NgForm) {
  // form validation
  this.validateSelect(this.model.currencyType);
  if (this.model.currencyType === 'default') {
  return; }

  this.formPoster.postNewAccount(this.model)
    .subscribe(
      data => console.log('success', data),
      err => console.log('error', err)
    );
}

  ngOnInit() {
  }

  validateSelect(value) {
    if (value === 'default') {
      this.hasSelectError = true;
    } else {
      this.hasSelectError = false;
    }
  }

  logIt(event) {
    console.log('clicked' + event);
  }

  mathCheck(value) {
    if (value === 'Up') {
      if ((this.model.startingAmount > this.model.ohNoAmount) ||
      (this.model.startingAmount > this.model.warningAmount) ||
      (this.model.ohNoAmount < this.model.warningAmount)) {
        this.mathWarning = 'check your math up';
      } else {
        this.mathWarning = '';
      }
    } else {
      if ((this.model.startingAmount < this.model.ohNoAmount) ||
      (this.model.startingAmount < this.model.warningAmount) ||
      (this.model.ohNoAmount > this.model.warningAmount)) {
        this.mathWarning = 'check your math down';
      } else {
        this.mathWarning = '';
      }
    }
  }
}
