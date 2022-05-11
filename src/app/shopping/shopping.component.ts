import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LogginService } from '../loggin.service';
import { Ingredients } from '../Shared/ingredients.model';
import * as fromApp from '../store/app.reducer';

import * as fromShoppingList from './store/shopping.reducer';
import * as ShoppingAction from './store/shopping.action';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit , OnDestroy {
  ingredients:Observable<{ingredients:Ingredients[]}>;
  //ingredients : Ingredients[];
  private igChangeSub:Subscription;
  constructor(
              private logginService:LogginService,
              private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
   this.ingredients= this.store.select('shopping');
    // this.ingredients = this.shoopingService.getIngredients();
    // this.igChangeSub = this.shoopingService.ingredientsChange
    // .subscribe(
    //   (ingredients:Ingredients[])=>{
    //   this.ingredients=ingredients;
    //   }
    //   );
      this.logginService.printLog('hello from shopping Component ngOnInit')
  }
  onEditItem(index:number){
    this.store.dispatch(new ShoppingAction.StartEdit(index));
   // this.shoopingService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
   // this.igChangeSub.unsubscribe();
  }
  

}
