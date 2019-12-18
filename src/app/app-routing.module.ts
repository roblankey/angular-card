import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';
import { CardSearchComponent } from './pages/card-search/card-search.component';

const routes: Routes = [
  {
    path: 'angular-starter',
    component: AppComponent,
    children: [
      {
        path: 'card/:stub',
        component: CardDetailComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '**',
        component: CardSearchComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'angular-starter',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
