import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ActivityModule } from './activity/activity.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    SharedModule,
    CoreModule,
    ActivityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
