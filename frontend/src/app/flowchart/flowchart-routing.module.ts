import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowchartPageComponent } from './flowchart-page/flowchart-page.component';

const routes: Routes = [
  { path: 'flowchart', component: FlowchartPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowchartRoutingModule {}
