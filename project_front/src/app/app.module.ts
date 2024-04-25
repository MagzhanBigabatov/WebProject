import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrComponent } from './registr/registr.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NgFor, NgIf } from '@angular/common';
import { AdminHotelsComponent } from './admin-hotels/admin-hotels.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AirPassageComponent } from './air-passage/air-passage.component';

@NgModule({
  declarations: [
    
    AppComponent,
    RegistrComponent,
    LoginComponent,
    MainComponent,
    TicketsComponent,
    HotelsComponent,
    HomePageComponent,
    MainBannerComponent,
    AdminHotelsComponent,
    AccountDetailsComponent,
    AirPassageComponent
  ],
  imports: [
    NgIf,
    NgFor,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomePageComponent},
      { path: '', redirectTo:'Home', pathMatch:"full"},
      { path: "Login", component: LoginComponent},
      { path: "Registration", component: RegistrComponent},
      { path: 'Tickets', component: TicketsComponent},
      { path: 'Hotels', component: HotelsComponent},
      { path: 'AdminHotels', component: AdminHotelsComponent},
      { path: 'AirPassage', component: AirPassageComponent},
      { path: 'AccountDetail', component: AccountDetailsComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
