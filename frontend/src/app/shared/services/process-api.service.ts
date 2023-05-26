import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ProcessSharingService } from './process-sharing.service';

@Injectable()
export class ProcessApiService {
  constructor(
    private http: HttpClient,
    private dataSharingService: ProcessSharingService
  ) {}

  public getProcessosInfos() {
    const movimento = this.dataSharingService.getMovimentoValue();
    const requestPayload = { movimento: movimento };

    this.http.post(`${environment}/api/processos`, requestPayload).subscribe(
      (response) => {
        this.dataSharingService.setResponseValue(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
