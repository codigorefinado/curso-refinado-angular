import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  gifs: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
