import { BetUserService } from '../../services/bet-user.service'
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromBetUserActions from '../actions/betUser.action';

@Injectable()
export class BetUserEffects {

    constructor(private actions$: Actions, private betUserservice: BetUserService) {}

    @Effect()
    loadBetUser$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetUserActions.LOAD_BETSUSER),
        switchMap(() => this.betUserservice.getBets()
        .pipe(
            map(response => {
                return new fromBetUserActions.LoadBetsUserSuccess(response)
            },
            catchError(error => of(new fromBetUserActions.LoadBetsUserFail(error)))
            )
         )
        )
    );

    // Update Customer
    @Effect()
    updatBetUser$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetUserActions.UPDATE_BETSUSER),
        map((action : fromBetUserActions.UpdateBetsUser) => action.payload),
        switchMap((payload) => this.betUserservice.updateBet(payload)
            .pipe(
                map(updatedBet => new fromBetUserActions.UpdateBetsUserSuccess({
                    id: updatedBet['id'],
                    changes: updatedBet
                })
            ),
            catchError(error => of(new fromBetUserActions.UpdateBetsUserFail(error))
        ))
      )
    );

    // Add Customer
    @Effect()
    addBetUser$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetUserActions.POST_BETSUSER),
        map((action : fromBetUserActions.PostBetsUser) => action.payload),
        switchMap((payload) => this.betUserservice.postBets(payload)
            .pipe(
                map(response => new fromBetUserActions.PostBetsUserSuccess(response)
            ),
            catchError(error => of(new fromBetUserActions.PostBetsUserFail(error))
        ))
      )
    );

    // Delete Customer

    @Effect()
    deleteCustomer$ : Observable<Action> = this.actions$.pipe(
        ofType(fromBetUserActions.DEL_BETSUSER),
        map((action : fromBetUserActions.DelBetsUser) => action.payload),
        switchMap((payload) => this.betUserservice.deleteById(payload)
            .pipe(
                map(()=> new fromBetUserActions.DelBetsUserSuccess(payload)
            ),
            catchError(error => of(new fromBetUserActions.DelBetsUserFail(error))
        ))
      )
    );
    


}