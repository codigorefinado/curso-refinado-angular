import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeRoutingModuleModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';

@NgModule({
  imports: [
    CommonModule, PipeRoutingModuleModule
  ],
  declarations: [ PipeComponent ]
})
export class PipeModule {
}
