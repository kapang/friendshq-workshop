import { Component } from '@angular/core';

@Component({ // known as decorator, similar to annotation in java
  selector: 'app-root',
  templateUrl: './app.component.html', // you don't have to specify the .html since again it's a sibling
  // template: `<h1>Hello {{name}}!!</h1>`  // you can use state var here
  styleUrls: ['./app.component.css'] // styles: [sometype: something]
})
export class AppComponent { // export is public in java
  title = 'app';
  name = 'UberConf exercise';
  // name = 'UberConf 2018'; // this is a state var;
  //it is like 2 way binding in ang v1, but 2 way binding is gone. if u change it up there, this won't change this var
}
