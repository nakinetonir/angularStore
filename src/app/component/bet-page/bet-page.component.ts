import { Component, OnInit } from '@angular/core';
import { BetService } from '../../services/bet.service'
import { Store } from '@ngrx/store'
import { appState } from '../../app.reducer'
import * as fromMensaje from "../../bet.action"
import { Observable } from 'rxjs'
import * as fromStore from '../../store'
import { Bet } from 'src/app/models/Bet';
import { Column } from 'src/app/models/Column';
import { Action } from 'src/app/models/Action';

@Component({
  selector: 'app-bet-page',
  templateUrl: './bet-page.component.html',
  styleUrls: ['./bet-page.component.css']
})
export class BetPageComponent implements OnInit {
  dato$: Observable<any>
  betEdit: Bet;
  bets: Bet[];
  pageSize: number = 10;
  betsData : Boolean = false;
  cols: Array<Column> = [
    {
      field: 'sport',
      header: 'sport',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'emision',
      header: 'emision',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'evento',
      header: 'evento',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'event_date',
      header: 'event_date',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'hour',
      header: 'hour',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'player_one',
      header: 'player_one',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'player_two',
      header: 'player_two',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'resultado',
      header: 'resultado',
      sortable: true,
      filterable: true,
      filterMatchMode: 'contains'
    },
    {
      field: 'acciones',
      header: 'Acciones',
      sortable: false,
      filterable: false,
      filterMatchMode: 'contains'
    }
  ];
  actions: Array<Action> = [
    {
      name: 'apostar',
      cssClass: 'pi pi-palette',
      event: { id: 1, eventName: 'bet' },
      title: 'Apostar'
    },
    {
      name: 'info',
      cssClass: 'pi pi-info-circle',
      event: { id: 2, eventName: 'info' },
      title: 'Información'
    },
    {
      name: '+',
      cssClass: 'pi pi-ellipsis-h',
      event: { id: 3, eventName: 'more' },
      title: 'más del Evento'
    }
  ]
  constructor(private store: Store<fromStore.AppState>, private betService: BetService) {
    store.select(fromStore.getBetState).subscribe(
      bets => {
        
        if(bets.bet.length>0)
        {
            this.bets = bets.bet;
           this.betsData = true;
           console.log(this.bets)
        }
        
      }

    )
    /*store.select(fromStore.getBetById(2)).subscribe(
      bet => {
        console.log(bet);
        if(bet)
        {
          this.betEdit = 
          {
            id:  bet["id"],
            active: bet["active"],
            bet_money: bet["bet_money"],
            cration_date: bet["cration_date"],
            emision: bet["emision"],
            estado: bet["estado"],
            evento: "Madrid",
            event_date: bet["event_date"],
            hour: bet["hour"],
            player_one: bet["player_one"],
            player_two: bet["player_two"],
            resultado: bet["resultado"],
            sport: bet["sport"],
          }
          let postBet  = 
          {
            id:  0,
            active: bet["active"],
            bet_money: bet["bet_money"],
            cration_date: bet["cration_date"],
            emision: bet["emision"],
            estado: bet["estado"],
            evento: "Madrid2",
            event_date: bet["event_date"],
            hour: bet["hour"],
            player_one: bet["player_one"],
            player_two: bet["player_two"],
            resultado: bet["resultado"],
            sport: bet["sport"],
          }
          //this.store.dispatch(new fromStore.UpdateBets(this.betEdit));
          //this.store.dispatch(new fromStore.PostBets(postBet));
          //this.store.dispatch(new fromStore.DelBets(1));
        }
        
      }

    )*/
  }

  /*spanishMensaje()
  {
      this.store.dispatch( new fromMensaje.SpanishMensaje("Los colores"))
  }

  englishMensaje()
  {
    this.store.dispatch(new fromMensaje.EnglishMensaje("Colores english"))
  }*/


  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadBets())


  }

  chooseActionMethod(event) {
    switch (event.eventId) {
      case 1: {
        console.log("1")
        break;
      }
      case 2: {
        console.log("2")
        break;
      }
      case 3: {
        console.log("3")
        break;
      }
    }
  }
}
