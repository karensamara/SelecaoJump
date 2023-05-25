import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FlowchartComponent } from './flowchart/flowchart.component';
import { FlowchartPageComponent } from './flowchart-page/flowchart-page.component';

const routes: Routes = [
  { path: 'flowchart', component: FlowchartPageComponent },
  // Add more routes for your module if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowchartRoutingModule {}
