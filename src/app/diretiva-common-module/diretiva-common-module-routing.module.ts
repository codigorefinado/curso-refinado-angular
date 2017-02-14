import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiretivaCommonModuleComponent } from './diretiva-common-module.component';
import { NgStyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { NgClassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgSwitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';

@NgModule({

  imports: [ RouterModule.forChild([
      { path: '', component: DiretivaCommonModuleComponent },
      { path: 'ngstyle', component: NgStyleExemploComponent },
      { path: 'ngclass', component: NgClassExemploComponent },
      { path: 'ngswitch', component: NgSwitchExemploComponent },
    ])
  ]
})
export class DiretivaCommonModuleRoutingModule {
}
