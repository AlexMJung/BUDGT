import { Component, OnInit, Input } from '@angular/core';

import { User } from '../model/user';

@Component({
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {
  model = new User();
  currency: string[] = ['USD', 'Euro', 'Pounds', 'Yen', 'Other'];

  constructor() {
  this.model = {
    'id': 'id1',
    'name': 'Alex',
    'startingAmount': 0.00,
    'warningAmount': 80.00,
    'ohNoAmount': 100.00,
    'countUpOperationType': true,
    'resetTiming': 'Weekly'
  };
  }

  ngOnInit() {
  }

  setDown(): boolean {
    this.model.countUpOperationType = false;
    console.log(this.model.countUpOperationType);
    return;
  }


  setUp(): boolean {
    this.model.countUpOperationType = true;
    console.log(this.model.countUpOperationType);
    return;
  }

}
