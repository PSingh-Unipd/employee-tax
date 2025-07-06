import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('Table', () => {
  let component: TableComponent<any, any>;
  let fixture: ComponentFixture<TableComponent<any, any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent<any>(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
