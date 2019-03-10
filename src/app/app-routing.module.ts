import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultilanguageComponent } from './multilanguage/multilanguage.component';
import { D3Component } from './d3/d3.component';

const routes: Routes = [
  { path: '', component: MultilanguageComponent, pathMatch: 'full' },
  { path: 'd3', component: D3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
