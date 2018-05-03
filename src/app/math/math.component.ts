import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { SelectUserComponent } from '../select-user/select-user.component';
import { User } from '../model/user';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
   constructor() {
  }

  ngOnInit() {
  }

   doMath(input: number): void {
    const user = {
      countUpOperationType: true,
      currentAmount: 0.00,
    };
    if (user.countUpOperationType) {
      user.currentAmount = (user.currentAmount + input);
    } else {
      user.currentAmount = (user.currentAmount - input);
    }
    console.log('doMath hit = ');
  }

  openSettings(): void {
    alert('open Settings hit!');
  }
}
