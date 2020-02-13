import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { FriendsService } from '../../shared/friend/friends.service';

@Component({
  selector: 'app-show-person',
  templateUrl: 'show-person.component.html',
  styleUrls: ['show-person.component.css']
})

// @Injectable()
export class ShowPersonComponent implements OnInit {

  @Input() friend: Friend; // setter equivalent, can be invoked from html
  @Output() saveMessage = new EventEmitter<Friend>(); // make sure it's the right import from angular/core
  // generic can be anything, you don't have to care, the child can say i'm emitting this event, but the parent may not be care
  // it only bubbles up to the immediate parent

  //constructor(private friendsService: FriendsService) { }

  ngOnInit() { }

  //  you can't access the source code from friendlist here
  like() {
    this.friend.fav = !this.friend.fav;
    //console.log('after: ' + this.friend.fav);
    //this.friendsService.saveFriend(this.friend).subscribe(resp => this.friend = resp);
    this.saveMessage.emit(this.friend); // package a Friend in the event

  }

  getHeartClass() {
    if (this.friend.fav) {
      return 'fa-heart';
    } else {
      return 'fa-heart-o';
    }
  }
}


