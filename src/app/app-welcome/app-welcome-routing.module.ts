import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppWelcomeComponent } from './app-welcome.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AppWelcomeComponent }
    ])
  ],

})
export class AppWelcomeRouringModule {
}
