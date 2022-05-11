import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
//import { Recipes } from "../recipes/recipes.model";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { RcipesService } from "../recipes/recipes.service";
import { Recipes } from "../recipes/recipes.model";
import { AuthService } from "../auth/auth.service";
import { CommonService } from "./common.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RcipesService,
    private authService: AuthService, private cs : CommonService) { }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
       this.cs.getURL() + 'recipe.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipe() {
    return this.http.get<Recipes[]>(
      this.cs.getURL() + 'recipe.json',
    ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}


  // fetchRecipe() {
  //   return this.http.get(
  //     'https://ng-course-recipe-book-c33f8-default-rtdb.firebaseio.com/recipe.json'
  //   )
  // }
  // {
  //   //     params: new HttpParams().set('auth', user.token)
  //   //   }

  //       if
  // request.time < timestamp.date(2022, 5, 18);

  // storeRecipes(){
  //     const recipe= this.recipeService.getRecipes()
  //     this.http.put('https://ng-course-recipe-book-c33f8-default-rtdb.firebaseio.com/recipe.json',
  //     recipe)
  //     .subscribe(response=>{
  //         console.log(response);
  //     });
  // }

  //     fetchRecipe(){
  //        return this.authService.user.pipe(
  //             take(1),
  //          exhaustMap(user=>{
  //             return this.http.get<Recipes[]>(
  //                 'https://ng-course-recipe-book-c33f8-default-rtdb.firebaseio.com/recipe.json',
  //             {
  //                 params:new HttpParams().set('auth',user.token)
  //             }
  //             );
  //         }),
  //             map(recipes=>{
  //             return recipes.map(recipe=>{
  //                 return {...recipe,ingredients:recipe.ingredients ? recipe.ingredients:[]
  //                     };
  //             });
  //         }),
  //              tap(recipes=>{
  //             this.recipeService.setRecipes(recipes);
  //         })
  //         )
  //     }
  // }



  // }

