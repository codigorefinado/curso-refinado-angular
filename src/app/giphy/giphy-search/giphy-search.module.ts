import { NgModule } from '@angular/core';
import { GiphySearchComponent } from './giphy-search.component';
import { CommonModule } from '@angular/common';
import { GiphySearchRoutingModule } from './giphy-search-routing.module';

@NgModule({
  imports: [
    CommonModule, GiphySearchRoutingModule
  ],
  exports: [],
  declarations: [ GiphySearchComponent ],
  providers: [],
})
export class GiphySearchModule {
}
