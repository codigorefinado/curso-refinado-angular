import { NgModule } from '@angular/core';
import { GiphySearchComponent } from './giphy-search.component';
import { CommonModule } from '@angular/common';
import { GiphySearchRoutingModule } from './giphy-search-routing.module';
import { GiphySearchAutoComponent } from './giphy-search-auto/giphy-search-auto.component';

@NgModule({
  imports: [
    CommonModule, GiphySearchRoutingModule
  ],
  exports: [],
  declarations: [ GiphySearchComponent, GiphySearchAutoComponent ],
  providers: [],
})
export class GiphySearchModule {
}
