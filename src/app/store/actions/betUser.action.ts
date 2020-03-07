import { Action } from "@ngrx/store";
import { BetUser } from '../../models/BetUser'

export const LOAD_BETSUSER = '[BetUser] Load BetsUser';
export const LOAD_BETSUSER_SUCCESS = '[BetUser] Load BetsUser Success';
export const LOAD_BETSUSER_FAIL = '[BetUser] Load BetsUser Fail';

export const UPDATE_BETSUSER = '[BetUser] Update BetsUser';
export const UPDATE_BETSUSER_SUCCESS = '[BetUser] Update BetsUser Success';
export const UPDATE_BETSUSER_FAIL = '[BetUser] Update BetsUser Fail';

export const POST_BETSUSER = '[BetUser] Post BetsUser';
export const POST_BETSUSER_SUCCESS = '[BetUser] Post BetsUser Success';
export const POST_BETSUSER_FAIL = '[BetUser] Post BetsUser Fail';

export const DEL_BETSUSER = '[BetUser] Del BetsUser';
export const DEL_BETSUSER_SUCCESS = '[BetUser] Del BetsUser Success';
export const DEL_BETSUSER_FAIL = '[BetUser] Del BetsUser Fail';

export class LoadBetsUser implements Action {
    readonly type = LOAD_BETSUSER;
}

export class LoadBetsUserSuccess implements Action {
    readonly type = LOAD_BETSUSER_SUCCESS;

    constructor(public payload: BetUser[]) {

    }
}


export class LoadBetsUserFail implements Action {
    readonly type = LOAD_BETSUSER_FAIL;

    constructor(public payload: any) {

    }
}


export class UpdateBetsUser implements Action {
    readonly type = UPDATE_BETSUSER;

    constructor(public payload: BetUser) {

    }
}

export class UpdateBetsUserSuccess implements Action {
    readonly type = UPDATE_BETSUSER_SUCCESS;

    constructor(public payload: any) {

    }
}


export class UpdateBetsUserFail implements Action {
    readonly type = UPDATE_BETSUSER_FAIL;

    constructor(public payload: any) {

    }
}

export class PostBetsUser implements Action {
    readonly type = POST_BETSUSER;

    constructor(public payload: BetUser) {

    }
}

export class PostBetsUserSuccess implements Action {
    readonly type = POST_BETSUSER_SUCCESS;

    constructor(public payload: BetUser) {

    }
}


export class PostBetsUserFail implements Action {
    readonly type = POST_BETSUSER_FAIL;

    constructor(public payload: any) {

    }
}

export class DelBetsUser implements Action {
    readonly type = DEL_BETSUSER;

    constructor(public payload: number) {

    }
}

export class DelBetsUserSuccess implements Action {
    readonly type = DEL_BETSUSER_SUCCESS;

    constructor(public payload: any) {

    }
}


export class DelBetsUserFail implements Action {
    readonly type = DEL_BETSUSER_FAIL;

    constructor(public payload: any) {

    }
}

export type BetUserActions =
    LoadBetsUser
    | LoadBetsUserSuccess
    | LoadBetsUserFail
    | LoadBetsUserFail
    | UpdateBetsUser
    | UpdateBetsUserSuccess
    | UpdateBetsUserFail
    | PostBetsUser
    | PostBetsUserSuccess
    | PostBetsUserFail
    | DelBetsUser
    | DelBetsUserSuccess
    | DelBetsUserFail