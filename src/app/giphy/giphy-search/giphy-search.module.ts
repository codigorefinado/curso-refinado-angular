import { NgModule } from '@angular/core';
import { GiphySearchComponent } from './giphy-search.component';
import { CommonModule } from '@angular/common';
import { GiphySearchRoutingModule } from './giphy-search-routing.module';
import { GiphySearchListModule } from './giphy-search-list/giphy-search-list.module';
import { GiphySearchService } from './giphy-search.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, GiphySearchRoutingModule, GiphySearchListModule, FormsModule,
  ],
  exports: [],
  declarations: [ GiphySearchComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchModule {
}
