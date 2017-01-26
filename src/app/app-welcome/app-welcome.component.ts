import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-welcome',
    templateUrl: './app-welcome.component.html'
})
export class AppWelcomeComponent implements OnInit {
    constructor(private title: Title) { }

    ngOnInit() {
      this.title.setTitle('Welcome giphy search...');
    }

}
