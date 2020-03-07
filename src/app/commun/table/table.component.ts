import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bet } from 'src/app/models/Bet';
import { Column } from 'src/app/models/Column';
import { Action } from 'src/app/models/Action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('bets') bets: Array<any>;
  @Input('cols') cols: Array<Column>;
  @Input('actions') actions: Array<Action>;
 @Output() actionMethod: EventEmitter<object> = new EventEmitter();
  
  placeholderValue: string = 'Search';

  // Número de resultados por página
  pageSize: number = 10;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.bets)
  }
  openMethod(eventId: number, row:any) {
    this.actionMethod.emit({ eventId, row });
  }

  
}
