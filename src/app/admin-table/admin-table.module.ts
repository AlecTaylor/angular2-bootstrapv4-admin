import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminTableComponent],
  exports: [AdminTableComponent]
})
export class AdminTableModule { }
