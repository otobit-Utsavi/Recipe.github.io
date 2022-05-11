import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../Shared/data-storage.service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.action';
//import {  } from '';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated=false;
  private userSub:Subscription;
  
  constructor(private dataStorageService: DataStorageService, private authService:AuthService , private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.userSub = this.store.select('auth').pipe(map(authState=>
      authState.user
    )).subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onfetchData(){
    this.dataStorageService.fetchRecipe().subscribe((response:any)=>{
      console.log(response);
      
    });
  }

  ngOnDestroy(): void {
  this.userSub.unsubscribe();
  }

  onLogout(){
    //this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }
}

