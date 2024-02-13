import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FoodComponent } from './main/navbar/food/food.component';
import { LocalfoodComponent } from './main/navbar/localfood/localfood.component';
import { NormalfoodComponent } from './main/navbar/normalfood/normalfood.component';
import { TransportComponent } from './main/navbar/transport/transport.component';
import { SeashoreComponent } from './main/navbar/seashore/seashore.component';
import { CandlelightComponent } from './main/navbar/candlelight/candlelight.component';
import { MountainviewComponent } from './main/navbar/mountainview/mountainview.component';
import { NormalhotelsComponent } from './main/navbar/normalhotels/normalhotels.component';
import { LocaldressComponent } from './main/navbar/localdress/localdress.component';
import { NormalshoppingComponent } from './main/navbar/normalshopping/normalshopping.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FoodComponent,
    LocalfoodComponent,
    NormalfoodComponent,
    TransportComponent,
    SeashoreComponent,
    CandlelightComponent,
    MountainviewComponent,
    NormalhotelsComponent,
    LocaldressComponent,
    NormalshoppingComponent,
    MapComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
