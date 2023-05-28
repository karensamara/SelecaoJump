import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnChanges,
  ElementRef,
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
    'duration',
  ];

  dataSource!: MatTableDataSource<Processo>;
  // isLoading!: boolean;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private loadingService: LoadingService) {}
  get isLoading(): boolean {
    return this.loadingService.isLoading;
  }

  ngOnInit(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);

    // this.isLoading = this.loadingService.isLoading;
  }

  ngAfterViewInit(): void {
    setTimeout(() => (this.dataSource.sort = this.sort));
    // this.dataSource.paginator = this.paginator;
    setTimeout(() => (this.dataSource.paginator = this.paginator));

    // TODO: Fix paginator
    // TODO: Sort not working on movimentos/totalMovimentos
  }

  ngOnChanges(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
    // this.dataSource.sort = this.sort;
    setTimeout(() => (this.dataSource.sort = this.sort));

    // this.dataSource.paginator = this.paginator;
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }
}
