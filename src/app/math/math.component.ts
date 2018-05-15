import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { OurMath } from '../model/ourMath';
import { User } from '../model/user';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
  mathForm: FormGroup;
  math: OurMath = new OurMath(); // defines what is sent back forth between the server.
  // user: User;
  user: User =
    {
      name: 'Alex',
      startingAmount: 0,
      warningAmount: 80,
      ohNoAmount: 100,
      currentAmount: 10.00,
      countUpOperationType: 'Up',
      resetTiming: 'Daily',
      currencyType: 'default'
    };
constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.mathForm = this.fb.group({
      myInput: [['', Validators.required]/*async validators go here*/ ]
    });
  }


   doMath(): void {
     if (this.mathForm.valid) {
      if (this.user.countUpOperationType) {
      this.user.currentAmount = (this.user.currentAmount + this.mathForm.get('myInput').value);
    } else {
      this.user.currentAmount = (this.user.currentAmount - this.mathForm.get('myInput').value);
    }
    console.log('doMath hit with input: ' + this.mathForm.get('myInput').value);
  }
}

}
