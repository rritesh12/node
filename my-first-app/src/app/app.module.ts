import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent } from './shared';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],


  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
