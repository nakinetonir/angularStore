
import * as fromBetUserActions from '../actions/betUser.action';
import { BetUser } from '../../models/BetUser'
export interface BetUserState
{
    betUser: BetUser[];
   loaded : boolean;
    loading : boolean;
    error: string;
}

export const defaultBetUser : BetUserState = {
    betUser: [],
    loading: false,
    loaded: false,
    error: ''
}



export function reducer(state = defaultBetUser , action : fromBetUserActions.BetUserActions){

    switch(action.type){
        case fromBetUserActions.LOAD_BETSUSER: {
            return {
                ...state,
                loading: true
            }
        }
        case fromBetUserActions.LOAD_BETSUSER_SUCCESS: {
            const bet = action.payload
            return {
                ...state,
                loading: false,
                loaded: true,
                bet
            }
        }
        case fromBetUserActions.LOAD_BETSUSER_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        case fromBetUserActions.UPDATE_BETSUSER_SUCCESS: {
            let data = state.betUser.map(betUser=>
                    {
                        if(betUser.id == action.payload.id)
                        {
                            return action.payload;
                        }
                        else
                        {
                            return betUser;
                        }
                    }    
                )
                return {
                    ...state,
                    betUser : data,
                    loaded: true,
                    loading: false,
                }
            
        }
        case fromBetUserActions.UPDATE_BETSUSER_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        case fromBetUserActions.POST_BETSUSER_SUCCESS: {
           return {
                ...state,
                betUser : [...state.betUser, action.payload]
            }
        }
        case fromBetUserActions.POST_BETSUSER_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error : action.payload
            }
        }
        case fromBetUserActions.DEL_BETSUSER_SUCCESS: {
            const betsUser = action.payload
            return {
                ...state,
                loading: false,
                loaded: true,
                betUser : action.payload
            }
        }
        case fromBetUserActions.DEL_BETSUSER_FAIL: {
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



export const getBetsUser = (state: BetUserState) => state.betUser;
export const getBetsUserLoaded = (state: BetUserState) => state.loaded;
export const getBetsUserLoading = (state: BetUserState) => state.loading;
export const getBetsUserError = (state: BetUserState) => state.error;