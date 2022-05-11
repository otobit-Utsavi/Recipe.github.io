import { Component, OnInit } from '@angular/core';
//import { Recipes } from './recipes.model';
import { RcipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

}
