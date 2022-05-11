import { Component, ComponentFactoryResolver, OnDestroy, ViewChild , OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AlertComponent } from "../Shared/alert/alert.component";
import { PlaceholderDirective } from "../Shared/placeholder/placeholder.directive";
import { Store } from "@ngrx/store";
import * as fromApp  from '../store/app.reducer';
import * as AuthAction from './store/auth.action';

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnInit ,OnDestroy{
  
    isLoginMode = true;
    isLoading= false;
    error:string=null;
    @ViewChild(PlaceholderDirective, {static:false}) alertHost:PlaceholderDirective;
    private closeSub: Subscription;
    private storeSub:Subscription;
    

    constructor( private componentFactoryResolver:ComponentFactoryResolver ,
        private store:Store<fromApp.AppState>){}

   ngOnInit(): void {
    this.storeSub=this.store.select('auth').subscribe(authState =>{
        this.isLoading = authState.loading;
        this.error = authState.authError;
        if(this.error){
            this.showErrorAlert(this.error);
        }
    });
   }
    ngOnDestroy(): void {
        if (this.closeSub){
            this.closeSub.unsubscribe();
        }
        if(this.storeSub){
            this.storeSub.unsubscribe();
        }
    }
    onSwitchMode(){
        this.isLoginMode=!this.isLoginMode;
    }

    onSubmit(form:NgForm){
        if(!form.valid){
            return;
        }

       const email = form.value.email;
       const password = form.value.password;

       //let authObs:Observable<AuthResponseData>;
       //this.isLoading=true;

       if(this.isLoginMode){
        this.store.dispatch(new AuthAction.LoginStart({email:email , password:password}    ));
        //this.authService.login(email,password)
        //authObs=this.authService.login(email,password);
        
        } else {
        //this.authService.signup(email,password)
        //authObs=this.authService.signup(email,password);
        this.store.dispatch( 
            new AuthAction.SignUpStart({email:email , password:password})
        );
       }

      
    
    //    authObs.subscribe(
    //     resData=>{
    //         console.log(resData);
    //         this.isLoading=false;
    //         this.router.navigate(['/recipes']);
    //     },
    //     errorMessage=>{
    //         console.log(errorMessage);
    //         this.error=errorMessage;
    //         this.showErrorAlert(errorMessage);
    //         this.isLoading=false;
    //     }
    //);
       form.reset();
    
    }

    onHandleError(){
        //this.error = null;
        this.store.dispatch(new AuthAction.ClearError());
    }

    private showErrorAlert(message:string){
       // const alertCmp = new AlertComponent();
       const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
           AlertComponent
           );
    
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

       const componentRef= hostViewContainerRef.createComponent(alertCmpFactory);
       componentRef.instance.message= message;
       this.closeSub = componentRef.instance.close.subscribe(()=>{
           this.closeSub.unsubscribe();
           hostViewContainerRef.clear();
       })
    }


    //now < 1652812200000
    //"auth != null"
}