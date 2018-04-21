import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  public API = '//localhost/rest';
  public USER_API = this.API + '/user';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/users');
  }

  get(id: string) {
    return this.http.get(this.USER_API + '/' + id);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    console.log('user=' + user);
    if (user['id']) {
      result = this.http.put(user.id, user);
    } else {
      console.log('post');
      result = this.http.post(this.USER_API, user);
      console.log('result=' + result);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete(id);
  }
}
