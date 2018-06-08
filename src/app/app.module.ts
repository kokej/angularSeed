import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainRoutingModule } from './routes/main-routing.module';

import { AppComponent } from './components/app/app.component';
import { MainNavComponent } from './components/commons/navs/main-nav/main-nav.component';
import { PageNotFoundComponent } from './components/notfound/not-found.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRoutingModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /*
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
  */
}
