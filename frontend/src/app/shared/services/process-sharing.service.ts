import { Injectable } from '@angular/core';

@Injectable()
export class ProcessSharingService {
  private movimento!: string;
  private response: any;

  constructor() {}

  setMovimentoValue(movimento: string) {
    this.movimento = movimento;
  }

  getMovimentoValue() {
    return this.movimento;
  }

  setResponseValue(response: any) {
    this.response = response;
  }

  getResponseValue() {
    return this.response;
  }
}
