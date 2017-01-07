import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'change-detection', loadChildren: 'app/change-detection/change-detection.module#ChangeDetectionModule'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
