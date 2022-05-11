import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { EffectsModule } from '@ngrx/effects';

import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { SharedModule } from './Shared/shared.module';
import { CoreModule } from './core.module';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appreducer),
    SharedModule,
    BrowserAnimationsModule,
    // StoreDevtoolsModule.instrument({logOnly:environment.production}),
    CoreModule,
    EffectsModule.forRoot([AuthEffects])
   ],
 
  bootstrap: [AppComponent],
  //providers:[LogginService]
  // entryComponents:[
  //   AlertComponent
  // ]
})
export class AppModule { }
