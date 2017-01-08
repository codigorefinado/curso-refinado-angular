import {Component, OnInit} from '@angular/core';
import {REQUESTGIPHY} from './request-giphy.stub';

@Component({
  selector: 'giphy-component',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.gifs = REQUESTGIPHY.data;
  }
}
