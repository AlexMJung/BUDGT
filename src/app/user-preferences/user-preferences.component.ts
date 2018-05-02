import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {
  @Input() Name: string;
  @Input() startingAmount: number;
  @Input() warningAmount: number;
  @Input() doneAmount: number;
  operator: boolean;
  @Input() days: number;

  constructor() { }

  ngOnInit() {
  }

  setDown(): boolean {
    this.operator = false;
    console.log(this.operator);
    return;
  }

  setUp(): boolean {
    this.operator = true;
    console.log(this.operator);
    return;
  }

}
