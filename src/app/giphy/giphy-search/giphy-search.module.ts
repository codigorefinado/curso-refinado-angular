import { NgModule } from '@angular/core';
import { GiphySearchComponent } from './giphy-search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'giphy-search', component: GiphySearchComponent }
    ])

  ],
  exports: [],
  declarations: [ GiphySearchComponent ],
  providers: [],
})
export class GiphySearchModule {
}
