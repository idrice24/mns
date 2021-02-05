import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    SharedModule,


    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(
    private router: Router,
    private messageService: MessageService) {

    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(this.router.config, replacer, 2));
  }
}
