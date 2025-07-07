import {
  AfterViewInit,
  Component,
  ViewChild,
  input,
  effect,
  computed,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

export type ColumnType = 'text' | 'actions';

export type TextColumn<T> = {
  type?: 'text';
  displayHeader: string;
  objKey: keyof T & string;
};

export type ActionDefinition<T> = {
  label: string;
  icon?: string;
  action: (row: T) => void;
};

export type ActionColumn<T> = {
  type: 'actions';
  displayHeader: string;
  objKey: string;
  actions: ActionDefinition<T>[];
};

export type TableColumn<T> = TextColumn<T> | ActionColumn<T>;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    MatPaginator,
    MatTableModule,
    RouterModule,
    MatIconModule,
    MatButton,
  ],
})
export class TableComponent<T> implements AfterViewInit {
  tableData = input<T[]>([]);
  tableColumns = input<TableColumn<T>[]>([]);
  paginationSize = input<number[]>([10]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  displayedColumns = computed(() =>
    this.tableColumns().map((col) => col.objKey)
  );

  constructor() {
    effect(() => {
      this.dataSource.data = this.tableData();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  isActionColumn(col: TableColumn<T>): col is ActionColumn<T> {
    return col.type === 'actions';
  }

  handleAction(action: ActionDefinition<T>, row: T) {
    action.action(row);
  }
}
