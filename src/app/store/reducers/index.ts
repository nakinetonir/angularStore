import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBetReducer from './app.reducer';

export interface AppState {
    bets : fromBetReducer.BetState
}

export const reducers = {
    bets : fromBetReducer.reducer
}

export const getState = (state) => state;

export const getBetState = createFeatureSelector<fromBetReducer.BetState>('bets');
export const getBets = createSelector(getBetState, fromBetReducer.getBets);

export const getBetById = (id) => createSelector(getBets, (bets)=> 
    {
        if(bets)
        {
            var betFound = bets.find(bet=> 
                {
                    return bet.id == id;
                }    
            )
            return betFound || {};
        }
    }
)



