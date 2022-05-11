import {  Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
//import { Subject } from "rxjs";
import { Ingredients } from "../Shared/ingredients.model";
import * as fromApp from '../store/app.reducer';
import { Recipes } from "./recipes.model";
import * as ShoppingAction from '../shopping/store/shopping.action';
import * as fromShoppingList from '../shopping/store/shopping.reducer'; 

@Injectable()
export class RcipesService{
  recipeChanged= new Subject<Recipes[]>();
 
  private recipes:Recipes[]=[];
      constructor( private store:Store<fromApp.AppState>){}

      setRecipes(recipe:Recipes[]){
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }
    
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      
      addIngredientsToShoppingList(ingredients:Ingredients[]){
         // this.shoppingService.addIngredient(ingredients);
        this.store.dispatch(new ShoppingAction.AddIngredients(ingredients));
        }

      addRecipe(recipe:Recipes){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipes){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }
    }
      


      // recipeSelected= new Subject<Recipes>();
  // private  recipes:Recipes[] =[
  //       new Recipes('A test recipes',
  //       'This is simple test',
  //       'https://th.bing.com/th/id/OIP._slB0ydLqeiEOz-WbcGxMgHaLH?pid=ImgDet&rs=1',
  //       [
  //         new Ingredients('franch fries',20)
  //       ]),
  //       new Recipes('Big FAte Burger',
  //       'WHat else you need to say?',
  //       'https://th.bing.com/th/id/OIP._slB0ydLqeiEOz-WbcGxMgHaLH?pid=ImgDet&rs=1',
  //       [
  //         new Ingredients('Allo',2)
  //       ])
        
  //     ];