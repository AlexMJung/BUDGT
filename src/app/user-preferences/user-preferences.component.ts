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
  currency: string[] = ['USD', 'Euro', 'Pounds', 'Yen', 'Other'];
  hasSelectError = false;
  mathWarning: string;

  constructor(private formPoster: FormPoster) {
    this.model = {
      id: 'id1',
      'name': 'Alex',
      'startingAmount': 0.00,
      'warningAmount': 80.00,
      'ohNoAmount': 100.00,
      'countUpOperationType': 'Up',
      'resetTiming': 'Weekly',
      'currencyType': 'default'
    };
  }

submitForm(form: NgForm) {
  // form validation
  this.validateSelect(this.model.currencyType);
  if (this.model.currencyType) {
  return; }

  this.formPoster.postNewAccount(this.model);
}

  ngOnInit() {
  }

  validateSelect(value) {
    console.log('currency: ' + this.model.currencyType);
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
