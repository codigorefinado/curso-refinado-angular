import { Component, OnInit } from '@angular/core';
import { GiphySearchComponent } from '../giphy-search.component';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from '../giphy-search.service';

@Component({
  selector: 'giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html'
})
export class GiphySearchAutoComponent extends GiphySearchComponent implements OnInit {

  constructor(protected title: Title, protected giphySearchService: GiphySearchService) {
    super(title, giphySearchService);
  }

  ngOnInit() {
    this.title.setTitle('Giphy search auto');
  }

}
