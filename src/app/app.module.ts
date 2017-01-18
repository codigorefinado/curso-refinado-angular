import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GiphyComponent} from './giphy/giphy.component';
import {GiphyService} from './giphy/giphy.service';
import { GiphySearchModule } from './giphy/giphy-search/giphy-search.module';
import { AppWelcomeModule } from './app-welcome/app-welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppWelcomeModule,
    GiphySearchModule,
    AppRoutingModule,

  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
