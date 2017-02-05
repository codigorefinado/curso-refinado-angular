import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'change-detection',
        loadChildren: 'app/change-detection/change-detection.module#ChangeDetectionModule'
      },
      {
        path: 'giphy-search-auto',
        loadChildren: 'app/giphy/giphy-search/giphy-search-auto/giphy-search-auto.module#GiphySearchAutoModule'
      },
      {
        path: 'giphy-search',
        loadChildren: 'app/giphy/giphy-search/giphy-search.module#GiphySearchModule'
      }

    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
