import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Actor } from './actor.type';

@Component({
  selector: 'movie-component',
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} {{actor.lastName}}</span>
      </p>
    </div>`,
  changeDetection: ChangeDetectionStrategy.Default
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Actor;
}
