import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';


@NgModule({
  imports: [
    RouterModule.forChild([ { path: '', component: GiphySearchAutoComponent } ])
  ],
  exports: [ RouterModule ]
})
export class GiphySearchAutoRoutingModule {
}
