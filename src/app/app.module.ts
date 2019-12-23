import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './pages/error/error.component';
import { CardDetailComponent } from './pages/card/card-detail/card-detail.component';
import { CardSearchComponent } from './pages/card/card-search/card-search.component';
import { AppMainComponent } from './pages/app-main/app-main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from './pages/card/card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardDetailResolverService } from './pages/card/card-detail/card-detail-resolver.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, ErrorComponent, CardDetailComponent, CardSearchComponent, AppMainComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, ReactiveFormsModule, FormsModule, MatCardModule],
  providers: [CardDetailResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
