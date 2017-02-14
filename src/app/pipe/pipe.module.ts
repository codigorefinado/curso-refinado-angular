import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeRoutingModuleModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';
import { TipoPessoaPipe } from '../shared/pipe/tipo-pessoa.pipe';
import { CapitalizePipe } from '../shared/pipe/capitalize.pipe';


@NgModule({
  imports: [
    CommonModule, PipeRoutingModuleModule,
  ],
  exports: [],
  declarations: [ PipeComponent, TipoPessoaPipe, CapitalizePipe ]
})
export class PipeModule {
}
