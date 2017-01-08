import {Component, OnInit} from '@angular/core';
import {REQUESTGIPHY} from './request-giphy.stub';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'giphy-component',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs: any[] = [];

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    //this.gifs = REQUESTGIPHY.data;
    let url: string = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=5';
    this.http.get(url).subscribe((response: Response) => {
      this.gifs = response.json().data;
    });
  }
}
