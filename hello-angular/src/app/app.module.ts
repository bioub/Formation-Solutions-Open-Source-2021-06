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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ExHelloworldComponent,
    ExMultistateButtonComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
