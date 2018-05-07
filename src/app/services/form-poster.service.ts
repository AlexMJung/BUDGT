import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/user';
@Injectable()
export class FormPoster {

  constructor(private http: Http) {
  }

  postNewAccount(user: User) {
    console.log('posting user: ', user );
  }

}
