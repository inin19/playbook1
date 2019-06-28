import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { LanguagePipePipe } from './pipe/language-pipe.pipe';
import { D3Component } from './d3/d3.component';
import { D3BubbleChartComponent } from './d3-bubble-chart/d3-bubble-chart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { TimezoneComponent } from './timezone/timezone.component';


@NgModule({
  declarations: [
    AppComponent,
    MultilanguageComponent,
    LanguagePipePipe,
    D3Component,
    D3BubbleChartComponent,
    GroupBarChartComponent,
    TimezoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
