import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ShareModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
