import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from './giphy-search.service';
import { Response } from '@angular/http';

@Component({
  selector: 'giphy-search',
  templateUrl: './giphy-search.component.html'
})
export class GiphySearchComponent implements OnInit {

  limit: string;
  term: string;

  gifs: any[] = [];

  constructor(protected title: Title, protected giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
    this.title.setTitle('Giphy search');

    this.giphySearchService.pesquisarGiphy().subscribe((response: Response) => this.gifs = response.json().data);
  }

  public pesquisarGiphy() {
    console.log(this.limit + '  ' + this.term);
    //    this.giphySearchService.pesquisarGiphy().subscribe((response: Response) => this.gifs = response.json().data);
  }

}
