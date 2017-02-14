import { NgModule } from '@angular/core';
import { DiretivaCommonModuleRoutingModule } from './diretiva-common-module-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiretivaCommonModuleComponent } from './diretiva-common-module.component';
import { NgStyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { NgClassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgSwitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';


@NgModule({
  imports: [ CommonModule, RouterModule, DiretivaCommonModuleRoutingModule ],
  exports: [],
  declarations: [ DiretivaCommonModuleComponent,
    NgStyleExemploComponent,
    NgClassExemploComponent,
    NgSwitchExemploComponent ],
  providers: [],
})
export class DiretivaCommonModuleModule {
}
