import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RcipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipes:Recipes;
@Input() index:number;

  constructor(private recipeServics:RcipesService) { }

  ngOnInit(): void {
  }

 

}
