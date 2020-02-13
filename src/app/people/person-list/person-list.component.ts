import { Component, OnInit, Injectable } from '@angular/core';
import { FriendsService } from '../../shared/friend/friends.service';

@Component({
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css']
})
@Injectable()
export class PersonListComponent implements OnInit {
  friends: Friend[] = [];
  constructor(private friendsService: FriendsService) { }

  // this is called right after the constructor finishes, so rule #1 don't do anything in the constr except DI
  ngOnInit() {
    // subscribe adds a handler to assign the response once it's received
    this.friendsService.getFriends().subscribe(resp => this.friends = resp); // resp => you can write a real js func if you prefer
  }

  displayBanner: boolean = false;
  lastSavedUser: Friend;

  showBanner(friend: Friend) {
    this.friendsService.saveFriend(friend)
      .subscribe(resp => friend = resp); // you must subscribe even if you don't need the response, otherwise you won't get the 'buzzer' at the restaurant
    this.lastSavedUser = friend;
    // console.log(this.lastSavedUser.firstName);
    this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  };

  // hardcoded for now
  // friends: Friend[] = [
  //   {
  //     "id": 1,
  //     "firstName": "Michelle",
  //     "lastName": "Mulroy",
  //     "gender": "female",
  //     "fav": true
  //   },
  //   {
  //     "id": 2,
  //     "firstName": "Venkat",
  //     "lastName": "Subramanian",
  //     "gender": "male",
  //     "fav": true
  //   },
  //   {
  //     "id": 3,
  //     "firstName": "Matt",
  //     "lastName": "Forsythe",
  //     "gender": "none",
  //     "fav": false
  //   },
  //   {
  //     "id": 4,
  //     "firstName": "Nate",
  //     "lastName": "Schutta",
  //     "gender": "male",
  //     "fav": true
  //   }
  // ]

}
