import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { ExHelloworldComponent } from './ex-helloworld/ex-helloworld.component';
import { ExMultistateButtonComponent } from './ex-multistate-button/ex-multistate-button.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ExHelloworldComponent,
    ExMultistateButtonComponent,
    SelectComponent,
    HomeComponent,
    UsersComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
