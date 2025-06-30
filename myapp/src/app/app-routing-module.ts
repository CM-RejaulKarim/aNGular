import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { ViewAllLocations } from '../../location/view-all-locations/view-all-locations';
import { UpdateStudent } from './update-student/update-student';
import { Addlocation } from '../../location/addlocation/addlocation';
import { UpdateLocation } from '../../location/update-location/update-location';

const routes: Routes = [
{path: '', component:Home},

{path:'allstu', component:ViewAllStudent},
{path:'addstu', component:Addstudent},
{path:'updateStudent/:id', component:UpdateStudent},

{path:'allloc', component:ViewAllLocations},
{path:'addloc', component:Addlocation},
  {path:'updateLocation/:id', component:UpdateLocation}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const routes: Routes = [
// {path: 'home', component:HomePath}
// ];