import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipes } from '../recipes.model';
import { RcipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route:ActivatedRoute,
              private recipeService:RcipesService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
      );
  }

  onSubmit(){
    // const newRecipe = new Recipes(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagepath'],
    //   this.recipeForm.value['ingredients']
    // );
   if(this.editMode){
     this.recipeService.updateRecipe(this.id , this.recipeForm.value);
     }else{
       this.recipeService.addRecipe(this.recipeForm.value);
     }
     this.onCancle();
  }

  onAddIngredients(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
        
      })
    );
  }
  onDeleteIngredients(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
  onCancle(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  private initForm(){
     
      let recipeName = '';
      let recipeImagepath = '';
      let recipeDescription = '';
      let recipeIngredients = new FormArray([]);

      if(this.editMode){
        const recipes = this.recipeService.getRecipe(this.id);
        recipeName = recipes.name;
        recipeImagepath= recipes.imagepath;
        recipeDescription= recipes.description;
        if(recipes['ingredients']){
          for (let ingredients of recipes.ingredients){
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredients.name , Validators.required),
                'amount':new FormControl(ingredients.amount,[
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        }
      }
      this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName , Validators.required),
      'imagepath': new FormControl(recipeImagepath , Validators.required),
      'description': new FormControl(recipeDescription , Validators.required),
      'ingredients':recipeIngredients
    });
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
