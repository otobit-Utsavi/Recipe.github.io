import { Ingredients } from "../Shared/ingredients.model";

export class Recipes{
    public name:string;
    public description : string;
    public imagepath:string;
    public ingredients:Ingredients[];

    constructor(name:string, desc:string, imagepath:string ,  ingredients:Ingredients[]){
        this.name= name;
        this.description = desc;
        this.imagepath= imagepath ;
        this.ingredients = ingredients;

    }
}