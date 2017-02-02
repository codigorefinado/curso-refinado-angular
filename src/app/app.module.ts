import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyService } from './giphy/giphy.service';
import { AppWelcomeModule } from './app-welcome/app-welcome.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppWelcomeModule,
    AppRoutingModule,
  ],
  providers: [ GiphyService ],
  exports: [ FormsModule ],

  bootstrap: [ AppComponent ]
})
export class AppModule {
}
