import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable,
} from 'rxjs/Observable';
import { Injectable } from '../../../../node_modules/@angular/core';

const BASEURL: string = 'http://localhost:3000'; // you can even DI the url thru the system by creating a config file
const FRIEND_ENDPOINT: string = '/friends';

@Injectable() // needed to do Dependency Injection in angular similar to spring, otherwise it won't work; allows things to put things in this
export class FriendsService {
  // you can also create a 'const' by it's really  just a getter only type of property in typescript
  // readonly BASEURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { // DI
  }

  getFriends(): Observable<Friend[]> { // observable is the next gen promise
    return this.http.get<Friend[]>(BASEURL + FRIEND_ENDPOINT);
    // the get() method here is ajax; xhr is dead to angular 6; window.fetch is the new api
  }

  saveFriend(friend: Friend): Observable<Friend> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    var options = { headers: headers };

    return this.http.put<Friend>(BASEURL + FRIEND_ENDPOINT + '/' + friend.id, friend, options);
    // alternatively you can use the `` ES6 syntax
    // return this.http.put<Friend>(`http://localhost:3000/friends/${friend.id}`, JSON.stringify(friend), options);
  }
}
