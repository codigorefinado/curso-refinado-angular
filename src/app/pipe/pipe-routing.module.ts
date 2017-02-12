import { NgModule } from '@angular/core';

import { RouterModule } from '../../../node_modules/@angular/router/src/router_module';
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
