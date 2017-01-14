import { Component } from '@angular/core';
import { Actor } from './actor.type';

@Component({
  selector: 'app-change-detection',
  template: `
    <h1>MovieApp</h1>
    <p>{{ slogan }}</p>
    <button type="button" (click)="changeActorProperties()">Change Actor Properties</button>
    <button type="button" (click)="changeActorObject()">Change Actor Object </button>
    <movie-component [title]="title" [actor]="actor"></movie-component>`,
})
export class ChangeDetectionComponent {

  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');

  changeActorProperties() {
    this.actor.firstName = 'Nicholas';
    this.actor.lastName = 'Cage';
  }

  changeActorObject() {
    this.actor = new Actor('Bruce', 'Willis');
  }
}
