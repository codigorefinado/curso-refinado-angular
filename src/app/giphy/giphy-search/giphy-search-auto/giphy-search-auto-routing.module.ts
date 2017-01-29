import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';

const routes: Routes = [ { path: 'giphy-search-auto', component: GiphySearchAutoComponent } ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GiphySearchAutoRoutingModule {
}
