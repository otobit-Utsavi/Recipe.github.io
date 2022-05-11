import { Component, OnDestroy, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/Shared/ingredients.model';
import * as fromApp from '../../store/app.reducer'; 
import * as shoppingaction  from '../store/shopping.action';
import * as fromShoppingList from '../store/shopping.reducer';

@Component({
  selector: 'app-shpping-list',
  templateUrl: './shpping-list.component.html',
  styleUrls: ['./shpping-list.component.css']
})
export class ShppingListComponent implements OnInit,OnDestroy {
@ViewChild('f',{static:false}) slForm:NgForm;
subscription:Subscription;
editMode = false;
//editedItemIndex:number;
editedItem:Ingredients;
  constructor(  private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
   this.subscription= this.store.select('shopping').subscribe(stateData =>{
      if (stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
       // this.editedItemIndex= stateData.editedIngredientIndex;
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
      }else{
        this.editMode = false;
      }
    });
  //  this.subscription= this.shoppingServce.startedEditing
  //   .subscribe(
  //     (index:number)=>{
  //       this.editedItemIndex = index;
  //       this.editMode = true;
  //       this.editedItem = this.shoppingServce.getIngredient(index);//this.editedItem = this.shoppingServce.getIngredients(index);
  //     //  this.editedItem=this.shoppingServce.getIngredient(index);
      
  //     }
  //   );  
  }
  onSubmit(form:NgForm){
  const value = form.value;
  const newIngredient = new Ingredients(value.name,value.amount);
  if(this.editMode){
    //this.shoppingServce.updateIngredient(this.editedItemIndex,newIngredient);
    this.store.dispatch(new shoppingaction.updateIngredient(newIngredient));
  }else{
    //this.shoppingServce.addIngredients(newIngredient);
    this.store.dispatch(new shoppingaction.AddIngredient(newIngredient));
  }
  this.editMode = false;
  form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new shoppingaction.StopEdit());
  }

  onDelete(){
    //this.shoppingServce.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new shoppingaction.deleteIngredient());
    this.onClear();
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new shoppingaction.StopEdit());
  }
}
