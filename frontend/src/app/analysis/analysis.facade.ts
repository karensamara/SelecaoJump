import { Injectable } from '@angular/core';
import { AnalysisState } from './state/analysis-state/analysis.state';
import { AnalysisApi } from './api/analysis.api';
import { ProcessSharingService } from '../shared/services/process-sharing.service';

@Injectable()
export class AnalysisFacade {
  public constructor(
    private readonly state: AnalysisState,
    private readonly api: AnalysisApi,
    private readonly dataSharingService: ProcessSharingService
  ) {}

  public fetchProcessosData() {
    const value = this.dataSharingService.getMovimentoValue();

    this.api
      .fetchProcessosDataByName(value || '')
      .subscribe((processosData) => {
        this.state.setProcessoData(processosData);
      });
  }

  public getProcessoData() {
    return this.state.getProcessoData();
  }
}
