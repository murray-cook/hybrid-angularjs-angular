import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
