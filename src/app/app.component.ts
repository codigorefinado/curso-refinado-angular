import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {

  onActivate(event: any) {
    console.log('onActivate', event);
  }

  onDeactivate(event: any) {
    console.log('onDeactivate', event);
  }
}
