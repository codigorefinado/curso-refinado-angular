import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';

<<<<<<< HEAD
=======
const routes: Routes = [ { path: '', component: GiphySearchAutoComponent } ];
>>>>>>> eea382f3d52b7cda7a6aee7065154a365f886a62

@NgModule({
  imports: [
    RouterModule.forChild([ { path: '', component: GiphySearchAutoComponent } ])
  ],
  exports: [ RouterModule ]
})
export class GiphySearchAutoRoutingModule {
}
