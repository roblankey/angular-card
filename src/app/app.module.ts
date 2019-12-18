import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './pages/error/error.component';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';
import { CardSearchComponent } from './pages/card-search/card-search.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, CardDetailComponent, CardSearchComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
