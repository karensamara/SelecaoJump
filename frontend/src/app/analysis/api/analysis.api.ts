import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../types/Processo';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AnalysisApi {
  constructor(private readonly http: HttpClient) {}

  public fetchProcessosData() {
    return of([
      {
        NPU: '0000000-00.0000.0.00.0000',
        totalMovimentos: 1,
        totalDuration: 10,
      },
      {
        NPU: '0000000-00.0000.0.00.0001',
        totalMovimentos: 2,
        totalDuration: 20,
      },
      {
        NPU: '0000000-00.0000.0.00.0002',
        totalMovimentos: 3,
        totalDuration: 30,
      },
      {
        NPU: '0000000-00.0000.0.00.0003',
        totalMovimentos: 4,
        totalDuration: 40,
      },
      {
        NPU: '0000000-00.0000.0.00.0004',
        totalMovimentos: 5,
        totalDuration: 50,
      },
      {
        NPU: '0000000-00.0000.0.00.0005',
        totalMovimentos: 6,
        totalDuration: 60,
      },
    ] as Processo[]);
  }

  public fetchProcessosDataByName(name: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/processos/`, {
        movimento: name,
      })
      .pipe(
        map((response: any) => {
          const transformedData: Processo[] = response.cases.map(
            (caseItem: any) => ({
              NPU: caseItem.NPU,
              totalMovimentos: caseItem.movimentosCount,
              totalDuration: caseItem.duration,
              movimentos: caseItem.pinnedMovimentoCount,
            })
          );
          return transformedData;
        })
      );
  }
}
