import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component'
import { TableComponent } from '../table/table.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TableComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    TableComponent, ModalComponent
  ],
  providers:  [],

})
export class CommunModule { }
