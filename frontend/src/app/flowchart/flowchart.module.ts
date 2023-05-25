import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { FlowchartRoutingModule } from './flowchart-routing.module';
import { FlowchartPageComponent } from './flowchart-page/flowchart-page.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [FlowchartComponent, FlowchartPageComponent, StatisticsComponent],
  imports: [CommonModule, FlowchartRoutingModule],
})
export class FlowchartModule {}
