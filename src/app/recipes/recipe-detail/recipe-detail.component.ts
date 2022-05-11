import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipes } from '../recipes.model';
import { RcipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipes:Recipes;
 id:number;
  constructor(private recipeService:RcipesService,
              private route:ActivatedRoute,
              private router:Router ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id = + params['id'];
        this.recipes = this.recipeService.getRecipe(this.id);
      }
      );
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipes.ingredients);
  }
  onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
   // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
}

onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipes']);
}
}
