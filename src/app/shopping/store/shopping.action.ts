import { Action } from "@ngrx/store";
import { Ingredients } from "src/app/Shared/ingredients.model";


export const  ADD_INGREDIENTS = '[Shopping] AddIngredients';
export const ADD_INGREDIENT = '[Shopping] AddIngredient'; 
export const UPDATE_INGREDIENT='[Shopping] updateIngredient';
export const DELETE_INGREDIENT='[Shopping] DeleteIngredient';
export const START_EDIT= '[Shopping] StartEdit';
export const STOP_EDIT ='[Shopping] StopEdit';

export class StartEdit implements Action{
        readonly type = START_EDIT;

        constructor(public payload : number){}
}
export class StopEdit implements Action{
        readonly type = STOP_EDIT;
}
export class AddIngredient implements Action{
        readonly type = ADD_INGREDIENTS;
       // payload : Ingredients;
       constructor(public payload:Ingredients){}
}

export class AddIngredients implements Action{
        readonly type = ADD_INGREDIENT;
        constructor(public payload:Ingredients[]){}
}

export class updateIngredient implements Action{
        readonly type = UPDATE_INGREDIENT;
        constructor(public payload:Ingredients){}
}

export class deleteIngredient implements Action{
        readonly type = DELETE_INGREDIENT;
}

export type ShoppingAction = AddIngredient | AddIngredients | updateIngredient | deleteIngredient | StartEdit | StopEdit;