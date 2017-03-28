import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from './giphy-search.service';
import { Response } from '@angular/http';

@Component({
  selector: 'giphy-search',
  templateUrl: './giphy-search.component.html'
})
export class GiphySearchComponent implements OnInit {

  dataCriacao: Date = new Date(1988, 3, 15);
  mensagem: string = 'Aguarde o curso de IONIC, em breve, fique ligado no YouTube ';
  youtube: string = 'https://goo.gl/h50OpD';


  limit: string;
  term: string;
  gifs: any[] = [];

  constructor(protected title: Title, protected giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
    this.title.setTitle('Giphy search');
  }

  public pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe((response: Response) => this.gifs = response.json().data);
  }

}
