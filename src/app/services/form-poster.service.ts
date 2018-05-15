import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormPoster {

  constructor(private http: Http) {
  }

  private extractData(res: any) {
    const body = res.json();
    return body.fields || {};
  }

  private extractTypes(res: any) {
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    console.error('!!*!! post error: ', error);
    return Observable.throw(error.statusText);
  }

  getCurrencyTypes(): Observable<any> {
    return this.http.get('http://localhost:3100/getType')
      .map(this.extractTypes)
      .catch(this.handleError);
  }

  postNewAccount(user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3100/processForm', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
