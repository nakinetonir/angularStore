import { BetService } from '../../services/bet.service'
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromBetActions from '../actions/bet.action';

@Injectable()
export class BetEffects {

    constructor(private actions$: Actions, private betservice: BetService) {}

    @Effect()
    loadBet$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetActions.LOAD_BETS),
        switchMap(() => this.betservice.getBets()
        .pipe(
            map(response => {
                return new fromBetActions.LoadBetsSuccess(response)
            },
            catchError(error => of(new fromBetActions.LoadBetsFail(error)))
            )
         )
        )
    );

    // Update Customer
    @Effect()
    updatBet$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetActions.UPDATE_BETS),
        map((action : fromBetActions.UpdateBets) => action.payload),
        switchMap((payload) => this.betservice.updateBet(payload)
            .pipe(
                map(updatedBet => new fromBetActions.UpdateBetsSuccess({
                    id: updatedBet['id'],
                    changes: updatedBet
                })
            ),
            catchError(error => of(new fromBetActions.UpdateBetsFail(error))
        ))
      )
    );

    // Add Customer
    @Effect()
    addCustomer$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetActions.POST_BETS),
        map((action : fromBetActions.PostBets) => action.payload),
        switchMap((payload) => this.betservice.postBets(payload)
            .pipe(
                map(response => new fromBetActions.PostBetsSuccess(response)
            ),
            catchError(error => of(new fromBetActions.PostBetsFail(error))
        ))
      )
    );

    // Delete Customer

    @Effect()
    deleteCustomer$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetActions.DEL_BETS),
        map((action : fromBetActions.DelBets) => action.payload),
        switchMap((payload) => this.betservice.deleteById(payload)
            .pipe(
                map(()=> new fromBetActions.DelBetsSuccess(payload)
            ),
            catchError(error => of(new fromBetActions.DelBetsFail(error))
        ))
      )
    );
    


}