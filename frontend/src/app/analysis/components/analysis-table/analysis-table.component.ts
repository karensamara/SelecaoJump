import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Processo } from '../../types/Processo';
import { MatPaginator } from '@angular/material/paginator';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-analysis-table',
  templateUrl: './analysis-table.component.html',
  styleUrls: ['./analysis-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysisTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() data: readonly Processo[] = [];
  @Input() displayedColumns: string[] = [
    'NPU',
    'movimentos',
    'totalMovimentos',
    'totalDuration',
  ];

  dataSource!: MatTableDataSource<Processo>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private loadingService: LoadingService) {}
  get isLoading(): boolean {
    return this.loadingService.isLoading;
  }

  ngOnInit(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit(): void {
    setTimeout(() => (this.dataSource.sort = this.sort));
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }

  ngOnChanges(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
    setTimeout(() => (this.dataSource.sort = this.sort));
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }
  convertSecondsToMonthsAndDays(seconds: number): string {
    const secondsInDay = 24 * 60 * 60;
    const secondsInMonth = secondsInDay * 30;

    const months = Math.floor(seconds / secondsInMonth);
    const remainingSeconds = seconds % secondsInMonth;
    const days = Math.floor(remainingSeconds / secondsInDay);
    if (months === 0 && days === 0) {
      return `Instantâneo`;
    }
    const monthsString = months === 1 ? 'mês' : 'meses';
    const daysString = days === 1 ? 'dia' : 'dias';
    return `${months} ${monthsString} e ${days} ${daysString}`;
  }
}
