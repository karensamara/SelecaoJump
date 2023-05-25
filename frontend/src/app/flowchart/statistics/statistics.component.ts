import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  statistics: any = {}; // Object to store the retrieved statistics
  avgCaseDurationMonths: number = 0;
  avgCaseDurationHours: number = 0;
  avgMovimentoDurationMonths: number = 0;
  avgMovimentoDurationHours: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics(): void {
    this.http.get<any>(`${environment.apiUrl}/api/processos/stats`).subscribe(
      (response) => {
        console.log(response);
        this.statistics = response[0];

        const secondsInAMonth = 2592000; // assuming 30 days per month

        this.avgCaseDurationMonths = Math.floor(
          this.statistics.avgCaseDuration / secondsInAMonth
        );
        const remainingSeconds =
          this.statistics.avgCaseDuration % secondsInAMonth;
        this.avgCaseDurationHours = Math.floor(remainingSeconds / 3600);

        this.avgMovimentoDurationMonths = Math.floor(
          this.statistics.avgMovimentoDuration / secondsInAMonth
        );
        const remainingSecondsMovimento =
          this.statistics.avgMovimentoDuration % secondsInAMonth;
        this.avgMovimentoDurationHours = Math.floor(
          remainingSecondsMovimento / 3600
        );

        // console.log(this.statistics.avgMovimentoDuration);
      },
      (error) => {
        // Error handling
        console.error('Error retrieving statistics:', error);
      }
    );
  }
}
