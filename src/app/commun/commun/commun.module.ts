import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { TableModule, Table } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    MatSnackBarModule,
    TabViewModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    TableComponent
  ]
})
export class CommunModule { }
