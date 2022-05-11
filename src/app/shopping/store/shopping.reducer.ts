

import { Ingredients } from "src/app/Shared/ingredients.model";
import * as ShoppingAction from "./shopping.action";

export interface State{
    ingredients :Ingredients[];
    editedIngredient:Ingredients;
    editedIngredientIndex:number;
}

// export interface AppState{
//     shopping : State;
// } 

const initialState :State ={
    ingredients :[
        new Ingredients('Apples',5),
        new Ingredients('Bananas',10)
      ],
    editedIngredient : null,
    editedIngredientIndex : -1  
};
export function ShoppingReducer (
    state:State= initialState, 
    action:ShoppingAction.ShoppingAction){
    switch(action.type){
        case ShoppingAction.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients:
                [...state.ingredients,action.payload]
            };
        case ShoppingAction.ADD_INGREDIENT:
            return{ 
                ...state,
                ingredients:
                [...state.ingredients,...action.payload]
            };
        case ShoppingAction.UPDATE_INGREDIENT:
            const ingredients = state.ingredients[state.editedIngredientIndex];
            const updateIngredient = {
                ...ingredients,
                ...action.payload
            };
            const updateIngredients= [...state.ingredients];
            updateIngredients[state.editedIngredientIndex]=updateIngredient;
            return{
                ...state,
                ingredients:updateIngredients,
                editedIngredientIndex:-1,
                editedIngredient: null
            };
        case ShoppingAction.DELETE_INGREDIENT:
            return{
                ...state,
                ingredients:state.ingredients.filter((ig,igIndex)=>{
                    return igIndex !==state.editedIngredientIndex;
                    
                }),
                editedIngredientIndex:-1,
                editedIngredient: null
            };

        case ShoppingAction.START_EDIT:
            return{
                ...state,
                editedIngredientIndex:action.payload,
                editedIngredient: {...state.ingredients[action.payload]}
            };
        case ShoppingAction.STOP_EDIT:
            return{
                ...state,
                editedIngredient : null,
                editedIngredientIndex : -1  

            };
            default:
                return state;
    }
}