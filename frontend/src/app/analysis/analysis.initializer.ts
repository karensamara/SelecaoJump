import { APP_INITIALIZER } from '@angular/core';
import { AnalysisFacade } from './analysis.facade';

// export const analysisInitializer = (analysisFacade: AnalysisFacade) => () => {
//   analysisFacade.fetchProcessosData();
// };

export function analysisInitializerFunc(analysisFacade: AnalysisFacade) {
  return () => {
    analysisFacade.fetchProcessosData();
  };
}

export const analysisInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: analysisInitializerFunc,
  multi: true,
  deps: [AnalysisFacade],
};
