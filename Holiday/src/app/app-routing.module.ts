import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FoodComponent } from './main/navbar/food/food.component';
import { CandlelightComponent } from './main/navbar/candlelight/candlelight.component';
import { LocaldressComponent } from './main/navbar/localdress/localdress.component';
import { LocalfoodComponent } from './main/navbar/localfood/localfood.component';
import { MountainviewComponent } from './main/navbar/mountainview/mountainview.component';
import { NormalhotelsComponent } from './main/navbar/normalhotels/normalhotels.component';
import { NormalshoppingComponent } from './main/navbar/normalshopping/normalshopping.component';
import { SeashoreComponent } from './main/navbar/seashore/seashore.component';
import { TransportComponent } from './main/navbar/transport/transport.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"map",component:MapComponent},
  {path:"normalshopping",component:NormalshoppingComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'',redirectTo:"/normalshopping",pathMatch:"full"},
  {path:"main",component:MainComponent,
children:[
  {path:"navbar",component:NavbarComponent,
children:[
  {path:"food",component:FoodComponent},
  {path:"localfood",component:LocalfoodComponent},
  {path:"candlelight",component:CandlelightComponent},
  {path:"localdress",component:LocaldressComponent},
  {path:"mountainview",component:MountainviewComponent},
  {path:"normalhotels",component:NormalhotelsComponent},
  {path:"seashore",component:SeashoreComponent},
  {path:"transport",component:TransportComponent},
]},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
