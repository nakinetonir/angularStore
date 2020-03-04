
import { Action } from "@ngrx/store";
import { Bet } from '../../models/Bet'

export const LOAD_BETS = '[Bet] Load Bets';
export const LOAD_BETS_SUCCESS = '[Bet] Load Bets Success';
export const LOAD_BETS_FAIL = '[Bet] Load Bets Fail';

export const UPDATE_BETS = '[Bet] Update Bets';
export const UPDATE_BETS_SUCCESS = '[Bet] Update Bets Success';
export const UPDATE_BETS_FAIL = '[Bet] Update Bets Fail';

export const POST_BETS = '[Bet] Post Bets';
export const POST_BETS_SUCCESS = '[Bet] Post Bets Success';
export const POST_BETS_FAIL = '[Bet] Post Bets Fail';

export const DEL_BETS = '[Bet] Del Bets';
export const DEL_BETS_SUCCESS = '[Bet] Del Bets Success';
export const DEL_BETS_FAIL = '[Bet] Del Bets Fail';

export class LoadBets implements Action {
    readonly type = LOAD_BETS;
}

export class LoadBetsSuccess implements Action {
    readonly type = LOAD_BETS_SUCCESS;

    constructor(public payload: Bet[]) {

    }
}


export class LoadBetsFail implements Action {
    readonly type = LOAD_BETS_FAIL;

    constructor(public payload: any) {

    }
}


export class UpdateBets implements Action {
    readonly type = UPDATE_BETS;

    constructor(public payload: Bet) {

    }
}

export class UpdateBetsSuccess implements Action {
    readonly type = UPDATE_BETS_SUCCESS;

    constructor(public payload: any) {

    }
}


export class UpdateBetsFail implements Action {
    readonly type = UPDATE_BETS_FAIL;

    constructor(public payload: any) {

    }
}

export class PostBets implements Action {
    readonly type = POST_BETS;

    constructor(public payload: Bet) {

    }
}

export class PostBetsSuccess implements Action {
    readonly type = POST_BETS_SUCCESS;

    constructor(public payload: Bet) {

    }
}


export class PostBetsFail implements Action {
    readonly type = POST_BETS_FAIL;

    constructor(public payload: any) {

    }
}

export class DelBets implements Action {
    readonly type = DEL_BETS;

    constructor(public payload: number) {

    }
}

export class DelBetsSuccess implements Action {
    readonly type = DEL_BETS_SUCCESS;

    constructor(public payload: any) {

    }
}


export class DelBetsFail implements Action {
    readonly type = DEL_BETS_FAIL;

    constructor(public payload: any) {

    }
}

export type BetActions =
    LoadBets
    | LoadBetsSuccess
    | LoadBetsFail
    | UpdateBets
    | UpdateBetsSuccess
    | UpdateBetsFail
    | PostBets
    | PostBetsSuccess
    | PostBetsFail
    | DelBets
    | DelBetsSuccess
    | DelBetsFail