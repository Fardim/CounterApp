import { CounterService } from './counter.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildCounterComponent } from './child-counter/child-counter.component';
import { ChildWithServiceComponent } from './child-with-service/child-with-service.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';

@NgModule({
  declarations: [
    ChildCounterComponent,
    ChildWithServiceComponent,
    ParentCounterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [CounterService],
})
export class HomeModule {}
