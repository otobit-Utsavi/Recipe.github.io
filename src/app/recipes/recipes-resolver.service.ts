import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { DataStorageService } from "../Shared/data-storage.service";
import { Recipes } from "./recipes.model";
import { RcipesService } from "./recipes.service";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipes[]>{
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RcipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipe();
    } else {
      return recipes;
    }
  }
}
  
    // constructor(private dataStorageService:DataStorageService, private recipeService:RcipesService){}
    // //: Recipes[] | Observable<Recipes[]> | Promise<Recipes[]>
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const recipes = this.recipeService.getRecipes();
    
    //     if (recipes.length === 0) {
    //       return this.dataStorageService.fetchRecipe();
    //     } else {
    //       return recipes;
    //     }
    //   }
      
    // }
    