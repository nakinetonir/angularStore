import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetPageComponent } from '../bet-page/bet-page.component';
import { CommunModule } from '../../commun/commun/commun.module'
import { TableModule, Table } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [BetPageComponent],
  imports: [
    CommonModule,
    CommunModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    MatSnackBarModule,
    TabViewModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports : [
    BetPageComponent
  ]
})
export class ComponentModule { }
