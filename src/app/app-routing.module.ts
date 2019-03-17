import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { D3BubbleChartComponent } from './d3-bubble-chart/d3-bubble-chart.component';

const routes: Routes = [
  { path: '', component: MultilanguageComponent, pathMatch: 'full' },
  { path: 'd3', component: D3BubbleChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
