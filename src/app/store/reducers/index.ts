import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBetReducer from './app.reducer';
import * as fromBetUserReducer from './betUser.reducer';
export interface AppState {
    bets : fromBetReducer.BetState
}

export const reducers = {
    bets : fromBetReducer.reducer
}
export interface betUserState {
    betsUser : fromBetUserReducer.BetUserState
}

export const reducersBetUser = {
    betsUser : fromBetUserReducer.reducer
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

export const getBetUserState = createFeatureSelector<fromBetUserReducer.BetUserState>('betsUser');
export const getBetsUser = createSelector(getBetUserState, fromBetUserReducer.getBetsUser);

export const getBetUserById = (id) => createSelector(getBetsUser, (betsUser)=> 
    {
        if(betsUser)
        {
            var betFound = betsUser.find(bet=> 
                {
                    return bet.id == id;
                }    
            )
            return betFound || {};
        }
    }
)

