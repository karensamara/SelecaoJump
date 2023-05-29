import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { AnalysisState } from './state/analysis-state/analysis.state';
import { AnalysisApi } from './api/analysis.api';
import { AnalysisFacade } from './analysis.facade';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisTableComponent } from './components/analysis-table/analysis-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  providers: [AnalysisState, AnalysisApi, AnalysisFacade],
  declarations: [AnalysisComponent, AnalysisTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    AnalysisRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class AnalysisModule {}
