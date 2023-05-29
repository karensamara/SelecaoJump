import { Component } from '@angular/core';
import { AnalysisFacade } from '../../analysis.facade';
import { Processo } from '../../types/Processo';
import { ProcessSharingService } from 'src/app/shared/services/process-sharing.service';
import { analysisInitializerFunc } from '../../analysis.initializer';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedMovimento: string = 'Expedição de movimento';
  processoList: Processo[] = [];

  constructor(
    private facade: AnalysisFacade,
    private dataSharingService: ProcessSharingService
  ) {
    facade.getProcessoData().subscribe((processoData) => {
      this.processoList = processoData;
    });
  }
  ngOnInit(): void {
    const analysisInitializerFn = analysisInitializerFunc(this.facade);
    analysisInitializerFn();

    this.selectedMovimento = `${this.dataSharingService.getMovimentoValue()}`;
  }
}
