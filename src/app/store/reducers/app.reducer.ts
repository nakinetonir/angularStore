
import * as fromBetActions from '../actions/bet.action';
import { Bet } from '../../models/Bet'
export interface BetState
{
    bet: Bet[];
   loaded : boolean;
    loading : boolean;
    error: string;
}

export const defaultBet : BetState = {
    bet: [],
    loading: false,
    loaded: false,
    error: ''
}



export function reducer(state = defaultBet , action : fromBetActions.BetActions){

    switch(action.type){
        case fromBetActions.LOAD_BETS: {
            return {
                ...state,
                loading: true
            }
        }
        case fromBetActions.LOAD_BETS_SUCCESS: {
            const bet = action.payload
            return {
                ...state,
                loading: false,
                loaded: true,
                bet
            }
        }
        case fromBetActions.LOAD_BETS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        case fromBetActions.UPDATE_BETS_SUCCESS: {
            let data = state.bet.map(bet=>
                    {
                        if(bet.cration_date == action.payload.id)
                        {
                            return action.payload;
                        }
                        else
                        {
                            return bet;
                        }
                    }    
                )
                return {
                    ...state,
                    bet : data,
                    loaded: true,
                    loading: false,
                }
            
        }
        case fromBetActions.UPDATE_BETS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        case fromBetActions.POST_BETS_SUCCESS: {
           return {
                ...state,
                bet : [...state.bet, action.payload]
            }
        }
        case fromBetActions.POST_BETS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        case fromBetActions.DEL_BETS_SUCCESS: {
            const bets = action.payload
            return {
                ...state,
                loading: false,
                loaded: true,
                bet : action.payload
            }
        }
        case fromBetActions.DEL_BETS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        default: {
            return state;
        }
    }
}



export const getBets = (state: BetState) => state.bet;
export const getBetsLoaded = (state: BetState) => state.loaded;
export const getBetsLoading = (state: BetState) => state.loading;
export const getBetsError = (state: BetState) => state.error;