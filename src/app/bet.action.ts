import { Action } from "@ngrx/store";
import { Bet } from 'src/app/models/Bet';
export const GET = '[Bet] GET'
export const POST = '[Bet] POST'
export const PUT = '[Bet] PUT'
export const GETBYID = '[Bet] GETBYID'
export const DEL = '[Bet] DEL'


export class getBet implements Action
{
    readonly type = GET;

    constructor (public payload : Bet[])
    {

    }
}

export class post implements Action
{
    readonly type = POST;

    constructor (public payload : Bet[])
    {

    }
}

export class put implements Action
{
    readonly type = PUT;

    constructor (public payload : Bet)
    {

    }
}

export class del implements Action
{
    readonly type = DEL;

    constructor (public payload : Boolean)
    {

    }
}
export class getBetById implements Action
{
    readonly type = GETBYID;

    constructor (public payload : Bet)
    {

    }
}


export type BetActions = getBet | post | put | del | getBetById
