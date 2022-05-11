import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipes } from '../recipes.model';

import{RcipesService} from '../recipes.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class RecipeListComponent implements OnInit , OnDestroy{
subscription:Subscription;
recipes:Recipes[];
  constructor(private recipeservice:RcipesService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.subscription =  this.recipeservice.recipeChanged
    .subscribe(
      (recipes:Recipes[])=>{
        this.recipes = recipes;
      }
    )
    this.recipes=this.recipeservice.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
