import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';
import { FormsModule } from '@angular/forms';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';
import { GiphySearchService } from '../giphy-search.service';

@NgModule({
  imports: [
    CommonModule, GiphySearchAutoRoutingModule,
    GiphySearchListModule, FormsModule,
  ],
  declarations: [ GiphySearchAutoComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchAutoModule {
}
