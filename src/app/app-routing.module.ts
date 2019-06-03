import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { D3BubbleChartComponent } from './d3-bubble-chart/d3-bubble-chart.component';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: '', component: RxjsComponent, pathMatch: 'full' },
  { path: 'd3', component: D3BubbleChartComponent },
  { path: 'bar', component: GroupBarChartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
