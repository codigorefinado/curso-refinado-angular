import { NgModule } from '@angular/core';
import { AppWelcomeComponent } from './app-welcome.component';
import { AppWelcomeRouringModule } from './app-welcome-routing.module';

@NgModule({
  imports: [ AppWelcomeRouringModule ],
  exports: [],
  declarations: [ AppWelcomeComponent ],
  providers: [],
})
export class AppWelcomeModule {
}
