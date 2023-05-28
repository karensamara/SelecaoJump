import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading = false;

  get isLoading(): boolean {
    return this._isLoading;
  }

  setLoadingState(isLoading: boolean): void {
    this._isLoading = isLoading;
  }
}
