import * as fromShoppingList from '../shopping/store/shopping.reducer';
import * as  fromAuth from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState{
    shopping: fromShoppingList.State;
    auth:fromAuth.State;
};

export const appreducer : ActionReducerMap<AppState>={
    shopping:fromShoppingList.ShoppingReducer,
    auth : fromAuth.authReducer
};