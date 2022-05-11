import { Action } from "@ngrx/store";

export const  AUTHENTICATE_SUCCESS= '[Auth] Login';
export const  LOGOUT = '[Auth] Logout';
export const AUTHENTICATE_FAIL = '[Auth] LoginFail';
export const LOGIN_START= '[Auth] LoginStart';
export const SIGNUP_START = '[Auth] SignUpStart';
export const CLEAR_ERROR = '[Auuth] ClearError';
export const AUTO_LOGIN = '[Auth] AutoLogin';
//export const SIGNUP = '[Auth] SignUp';


export class Authenticate_Success implements Action{
    readonly type = AUTHENTICATE_SUCCESS;

    constructor(
        public payload:{
            email:string;
            userId:string;
            token:string;
            expirationDate: Date;
        }
    ){}
}

export class Logout implements Action{
    readonly type= LOGOUT;
}

export class LoginStart implements Action{
    readonly type =LOGIN_START;

    constructor(public payload : {email: string; password : string}){}
}

export class Authenticate_Fail implements Action{
    readonly type= AUTHENTICATE_FAIL;

    constructor(public payload: string){}
}

export class ClearError implements Action{
    readonly type = CLEAR_ERROR;

}

export class SignUpStart implements Action{
    readonly type = SIGNUP_START;

    constructor(public payload: {email: string; password : string}){}
}

export class AutoLogin implements Action{
    readonly type = AUTO_LOGIN;


}
export type AuthAction = Authenticate_Success | Logout | LoginStart | Authenticate_Fail| SignUpStart | ClearError |AutoLogin;