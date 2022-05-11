
import { Injectable } from "@angular/core";
import * as fromApp from '../store/app.reducer'
import { Store } from "@ngrx/store";
import * as AuthAction from './store/auth.action';


// export interface AuthResponseData{
//    // kind:string;
//     idToken:string;
//     email:string;
//     refreshToken:string;
//     expiresIn:string;
//     localId:string;
//     registered?: boolean;
// }

@Injectable({providedIn:'root'})
export class AuthService{
  private tokenExpirationTmer:any;
    //authToken: any;
    //user: any;
    //user = new BehaviorSubject<User>(null);
  
   // token:string = null;
   

    constructor( private store:Store<fromApp.AppState>){}

    setLogoutTimer(exirationDuration:number){
      console.log(exirationDuration);
     this.tokenExpirationTmer= setTimeout(()=>{
          this.store.dispatch(new AuthAction.Logout());
         },   exirationDuration
      );
   }

   clearLogoutTimer(){
     if (this.tokenExpirationTmer){
       clearTimeout(this.tokenExpirationTmer);
       this.tokenExpirationTmer = null;
     }
   }
    //private http:HttpClient , private router:Router,
  //   signup(email : string , password:string) {
  //      return this.http.post<AuthResponseData>(
  //      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
  //      {
  //           email:email,
  //           password:password,
  //           returnSecureToken:true
  //       }).pipe(
  //           catchError(this.handleError),
  //           tap(resData=>{
  //               this.handleAuthentication(
  //               resData.email,
  //               resData.localId,
  //               resData.expiresIn,
  //               +resData.expiresIn
  //               );
  //              })
  //           );
  //   }

  // login(email: string ,password: string){
  //        return   this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseAPIKey,
  //           {
  //               email:email,
  //               password:password,
  //               returnSecureToken:true
  //           }).pipe(
  //               catchError(this.handleError),
                
  //            tap(resData=>{
  //               this.handleAuthentication(
  //               resData.email,
  //               resData.localId,
  //               resData.expiresIn,
  //               +resData.expiresIn
  //               );
  //              })
  //           );
                
  //   }
    // logout(){
    //     this.store.dispatch(new AuthAction.Logout());
    //     //this.user.next(null);
    //     // this.router.navigate(['/auth']);
    //     localStorage.removeItem('userData');
    //     if (this.tokenExpirationTmer){
    //         clearTimeout(this.tokenExpirationTmer); 
    //     }
    //     this.tokenExpirationTmer= null;
    // }

    
    // autologin(){
    //     const userData:{
    //         email:string;
    //         id:string;
    //         _token:string;
    //         _tokenExpirationDate:string;
    //     } = JSON.parse(localStorage.getItem('userData'));
    //     if(!userData){
    //         return ; 
    //     }

    //     const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
        

    //     if(loadedUser.token){
    //         //this.user.next(loadedUser);
    //         this.store.dispatch(new AuthAction.Authenticate_Success({email: loadedUser.email ,
    //                                                   userId:loadedUser.id,
    //                                                   token:loadedUser.token,
    //                                                   expirationDate:new Date(userData._tokenExpirationDate)}))
    //         const exirationDuration=
    //         new Date(userData._tokenExpirationDate).getTime()-
    //         new Date().getTime();
    //         this.autologout(exirationDuration);
    //     }
    // }

    // private handleAuthentication(
    //     email: string,
    //     userId: string,
    //     token: string,
    //     expiresIn: number
    //   ) {
    //     const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    //     const user= new User(email,userId,token,expirationDate);
    //    // const user = new User(email, userId, token, expirationDate);
    //       this.store.dispatch(new AuthAction.Authenticate_Success({email:email, 
    //                                                 userId:userId ,
    //                                                 token:token ,
    //                                                 expirationDate:expirationDate}))
    //     //this.user.next(user);

    //     this.autologout(expiresIn * 1000);
    //     localStorage.setItem('userData', JSON.stringify(user));
    //   }
    
    //   private handleError(errorRes: HttpErrorResponse) {
    //     let errorMessage = 'An unknown error occurred!';
    //     if (!errorRes.error || !errorRes.error.error) {
    //       return throwError(errorMessage);
    //     }
    //     switch (errorRes.error.error.message) {
    //       case 'EMAIL_EXISTS':
    //         errorMessage = 'This email exists already';
    //         break;
    //       case 'EMAIL_NOT_FOUND':
    //         errorMessage = 'This email does not exist.';
    //         break;
    //       case 'INVALID_PASSWORD':
    //         errorMessage = 'This password is not correct.';
    //         break;
    //     }
    //     return throwError(errorMessage);
    //   }
    }
    