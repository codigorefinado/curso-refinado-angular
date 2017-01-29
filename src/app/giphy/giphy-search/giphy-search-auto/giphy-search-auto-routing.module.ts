import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'giphy-search-auto', component: GiphySearchAutoComponent }
    ])
  ]
})
export class GiphySearchAutoRoutingModule {
}
