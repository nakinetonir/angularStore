import { Action } from "@ngrx/store"
import * as fromMensaje from './bet.action'
import { Bet } from 'src/app/models/Bet';
export interface appState {
    bet: any 
}

export const initialState = 
{
    bet: null
}

export function miReducer(state: appState = initialState, action: fromMensaje.BetActions)
{
    console.log(action);

    switch(action.type)
    {
        case fromMensaje.GET : 
            return {
                ...state,
                bet: action.payload
            }
            break;
        case fromMensaje.POST :
            return {
                ...state,
                bet: action.payload
            }
            break;
        case fromMensaje.PUT : 
            return {
                ...state,
                bet: action.payload
            }
            break;
        case fromMensaje.DEL :
            return {
                ...state,
                bet: action.payload
            }
            break;
        case fromMensaje.GETBYID : 
            return {
                ...state,
                bet: action.payload
            }
            break;
        default:
            return state
    }
}