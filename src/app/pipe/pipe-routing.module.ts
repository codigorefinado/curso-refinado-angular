import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { PipeComponent } from './pipe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PipeComponent }
    ])
  ]
})
export class PipeRoutingModuleModule {
}
