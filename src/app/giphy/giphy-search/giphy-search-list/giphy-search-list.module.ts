import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchListComponent } from './giphy-search-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ GiphySearchListComponent ],
  exports: [ GiphySearchListComponent ]
})
export class GiphySearchListModule {
}
