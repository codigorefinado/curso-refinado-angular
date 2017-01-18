import { NgModule } from '@angular/core';
import { GiphySearchComponent } from './giphy-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'giphy-search', component: GiphySearchComponent }
    ])
  ]
})
export class GiphySearchRoutingModule {
}
