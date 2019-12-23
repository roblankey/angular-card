import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AppMainComponent } from './pages/app-main/app-main.component';
import { CardComponent } from './pages/card/card.component';
import { CardSearchComponent } from './pages/card/card-search/card-search.component';
import { CardDetailComponent } from './pages/card/card-detail/card-detail.component';
import { CardDetailResolverService } from './pages/card/card-detail/card-detail-resolver.service';

const routes: Routes = [
  {
    path: 'angular-starter',
    component: AppMainComponent,
    children: [
      {
        path: 'card',
        component: CardComponent,
        children: [
          {
            path: 'search',
            component: CardSearchComponent
          },
          {
            path: 'detail/:stub',
            component: CardDetailComponent,
            resolve: {
              card: CardDetailResolverService
            }
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'search'
          },
          {
            path: '**',
            redirectTo: '/angular-starter/error'
          }
        ]
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'card'
      },
      {
        path: '**',
        redirectTo: 'error'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'angular-starter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
