import { PeopleComponent } from "./people/people.component";
import { Routes } from "../../node_modules/@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component"; // 

export const routes: Routes = [ // always need export for the world to see it
  {
    path: 'people',
    component: PeopleComponent,
    // if you want to add sub paths use
    // children: [
    //   {
    //     path: ':id',
    //     component: ShowPersonDetailComponent
    //   }
    // ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**', // wildcard
    redirectTo: 'dashboard',
    pathMatch: 'full', // recommend the trailing comma after even if there's nothing there; ES6 syntax
    // reason why is because in the git then you have only  1 line of change instead of having 2 and you can also reorder it easily
    // trailing commas are allowed in objects, arrays in ES6; ES7 are allowed for function args too
  }
]
