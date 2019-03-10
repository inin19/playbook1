import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { LanguagePipePipe } from './pipe/language-pipe.pipe';
import { D3Component } from './d3/d3.component';

@NgModule({
  declarations: [
    AppComponent,
    MultilanguageComponent,
    LanguagePipePipe,
    D3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
