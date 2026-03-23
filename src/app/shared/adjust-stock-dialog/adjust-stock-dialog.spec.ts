import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustStockDialog } from './adjust-stock-dialog';

describe('AdjustStockDialog', () => {
  let component: AdjustStockDialog;
  let fixture: ComponentFixture<AdjustStockDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdjustStockDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustStockDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
