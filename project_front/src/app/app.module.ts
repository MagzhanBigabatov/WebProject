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

@NgModule({
  declarations: [
    
    AppComponent,
    RegistrComponent,
    LoginComponent,
    MainComponent,
    TicketsComponent,
    HotelsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: MainComponent},
      { path: "Login", component: LoginComponent},
      { path: "Registration", component: RegistrComponent},
      { path: 'Tickets', component: TicketsComponent},
      { path: 'Hotels', component: HotelsComponent},
      { path: 'Home', component: HomePageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
