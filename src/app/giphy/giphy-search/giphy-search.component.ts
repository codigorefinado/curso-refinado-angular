import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'giphy-search',
    templateUrl: './giphy-search.component.html'
})
export class GiphySearchComponent implements OnInit {
    constructor(private title: Title) { }

    ngOnInit() {
      this.title.setTitle('Giphy search...');
    }

}
