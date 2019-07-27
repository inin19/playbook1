import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { LanguagePipePipe } from './pipe/language-pipe.pipe';
import { D3Component } from './d3/d3.component';
import { D3BubbleChartComponent } from './d3-bubble-chart/d3-bubble-chart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { TimezoneComponent } from './timezone/timezone.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    MultilanguageComponent,
    LanguagePipePipe,
    D3Component,
    D3BubbleChartComponent,
    GroupBarChartComponent,
    TimezoneComponent,
    RxjsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
