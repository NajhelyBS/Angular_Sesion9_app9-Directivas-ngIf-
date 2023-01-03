import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './web/card/card.component';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent, 
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
