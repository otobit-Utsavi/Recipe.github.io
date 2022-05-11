import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogginService } from './loggin.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  constructor(
    private store:Store<fromApp.AppState> , 
    private loggingservice:LogginService){}
  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin());
    this.loggingservice.printLog('hello from AppComponent ngOninit');
  }
}
