import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VacancyByCompanyComponent } from './vacancy-by-company/vacancy-by-company.component';
import { RouterModule } from '@angular/router';
import { RegistrComponent } from './registr/registr.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NgFor, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    
    AppComponent,
    VacancyByCompanyComponent,
    RegistrComponent,
    LoginComponent,
    MainComponent,
    TicketsComponent,
    HotelsComponent,
    HomePageComponent,
    MainBannerComponent
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
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
