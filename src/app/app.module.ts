//if u change the platform you can change what you're targeting like ios/android platform, no longer only web
import { BrowserModule } from '@angular/platform-browser'; // this makes it a web platform, it renders it as html
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // for ajax
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; // same as java to import
import { PeopleComponent } from './people/people.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { ShowPersonComponent } from './people/show-person/show-person.component';

import { FriendsService } from './shared/friend/friends.service';
import { DashboardComponent } from './dashboard/dashboard.component'
import { routes } from './app.routes';


@NgModule({
  declarations: [ // there is no classpath in js, but this is similar to autowiring in spring
    AppComponent, // put the component name you want to use - must import it first or compile will fail
    PeopleComponent,
    PersonListComponent,
    ShowPersonComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // it imports 3rd party packages
    RouterModule.forRoot(routes) // must configure the router w/ routes
  ],
  providers: [
    FriendsService // makes it allowable to inject to other classes
  ],
  bootstrap: [AppComponent] // tell what is the main class in java aka main component here;
  // can you specify more than 1? yes, but generally it is recommended to just use 1 main component that composes the others underneath
})
export class AppModule { }
