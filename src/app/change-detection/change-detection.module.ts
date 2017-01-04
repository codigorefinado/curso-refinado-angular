import { NgModule } from '@angular/core';
import { ChangeDetectionComponent } from './change-detection.component';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';

@NgModule({
  imports: [ CommonModule, ChangeDetectionRoutingModule ],
  exports: [],
  declarations: [ ChangeDetectionComponent, MovieComponent ],
  providers: [],
})
export class ChangeDetectionModule {
}
