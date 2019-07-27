import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { D3BubbleChartComponent } from './d3-bubble-chart/d3-bubble-chart.component';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { TimezoneComponent } from './timezone/timezone.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: TimezoneComponent, pathMatch: 'full' },
  { path: 'multi', component: MultilanguageComponent, },
  { path: 'd3', component: D3BubbleChartComponent },
  { path: 'bar', component: GroupBarChartComponent },
  { path: 'auth', component: AuthComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
