import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { LanguagePipePipe } from './pipe/language-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultilanguageComponent,
    LanguagePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
