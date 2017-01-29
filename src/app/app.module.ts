import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyService } from './giphy/giphy.service';
import { GiphySearchModule } from './giphy/giphy-search/giphy-search.module';
import { AppWelcomeModule } from './app-welcome/app-welcome.module';
import { GiphySearchAutoModule } from './giphy/giphy-search/giphy-search-auto/giphy-search-auto.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppWelcomeModule,
    GiphySearchModule,
    GiphySearchAutoModule,
    AppRoutingModule,

  ],
  exports: [ FormsModule, ReactiveFormsModule, HttpModule, CommonModule ],
  providers: [ GiphyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
