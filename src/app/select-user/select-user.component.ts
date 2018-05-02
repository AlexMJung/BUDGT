import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
 _user: User;
users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        'id': 'id1',
        'name': 'Alex',
        'startingAmount': 0,
        'warningAmount': 80,
        'ohNoAmount': 100,
        'countUpOperationType': true,
        'resetDays': 7,
    },
    {
      'id': 'id6',
      'name': 'Sam',
      'startingAmount': 100,
      'warningAmount': 20,
      'ohNoAmount': 0,
      'countUpOperationType': false,
      'resetDays': 7,
    }
  ];
  }


  selectUser(id: string): void {
    console.log('Selected User was clicked. The Id is :' + id );
  }

}
