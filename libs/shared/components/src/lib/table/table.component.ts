import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild,
  input,
  effect,
  computed,
  signal,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [MatPaginator, MatTableModule],
})
export class TableComponent<T> implements AfterViewInit {
  tableData = input<T[]>([]);
  tableColumns = input<{ displayHeader: string; objKey: string }[]>([]);
  paginationSize = input<number[]>([10, 20]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: any;
  displayedColumns = computed(() =>
    this.tableColumns().map((col) => col.objKey)
  );

  constructor() {
    effect(() => {
      const data = this.tableData();
      this.dataSource = new MatTableDataSource<T>(data);

      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource().paginator = this.paginator;
  }
}
