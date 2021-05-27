import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: 'parent-counter', pathMatch: 'full'},
  {path: 'parent-counter', component: ParentCounterComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
