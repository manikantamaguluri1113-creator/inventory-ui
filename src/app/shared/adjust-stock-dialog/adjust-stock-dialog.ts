// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-adjust-stock-dialog',
//   standalone: false,
//   templateUrl: './adjust-stock-dialog.html',
//   styleUrl: './adjust-stock-dialog.scss',
// })
// export class AdjustStockDialog {

// }


import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adjust-stock-dialog',
  standalone: false,
  templateUrl: './adjust-stock-dialog.html',
  styleUrl: './adjust-stock-dialog.scss'
})
export class AdjustStockDialog {

  adjustType: string = 'add';
  adjustQuantity: number = 1;

  constructor(
    public dialogRef: MatDialogRef<AdjustStockDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    const delta = this.adjustType === 'add' ? this.adjustQuantity : -this.adjustQuantity;
    this.dialogRef.close({ delta, productId: this.data.productId, warehouseId: this.data.warehouseId });
  }
}