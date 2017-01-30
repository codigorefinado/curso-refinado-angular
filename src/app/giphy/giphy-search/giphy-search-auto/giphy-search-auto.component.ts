import { Component, OnInit } from '@angular/core';
import { GiphySearchComponent } from '../giphy-search.component';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from '../giphy-search.service';
import { Response } from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html'
})
export class GiphySearchAutoComponent extends GiphySearchComponent implements OnInit {

  limit: string = '3';
  term: string;

  gifs: any[] = [];

  constructor(protected title: Title, protected giphySearchService: GiphySearchService) {
    super(title, giphySearchService);
  }

  ngOnInit() {
    this.title.setTitle('Giphy search auto');
  }


  public pesquisarGiphy() {
    //milliseconds
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .debounceTime(9000)
      .distinctUntilChanged()
      .subscribe((response: Response) => this.gifs = response.json().data);
  }
}
