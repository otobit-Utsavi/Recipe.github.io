import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes.component";
const routes:Routes=[
    {path:'',
        component:RecipesComponent,
        canActivate:[AuthGuard], 
        children:[
      {path:'', component:RecipesStartComponent},
     
      {path:'new',component:RecipesEditComponent}, 
      {path:':id',component:RecipeDetailComponent, resolve:[RecipesResolverService]},
      {path:':id/edit',component:RecipesEditComponent,resolve:[RecipesResolverService]}
    ]},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
})
export class RecipeRoutingModule{}