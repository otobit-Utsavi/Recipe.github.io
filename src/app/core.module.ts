import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorServic } from "./auth/auth-interceptor.service";
import { LogginService } from "./loggin.service";
import { RcipesService } from "./recipes/recipes.service";


@NgModule({
    providers:[
        RcipesService,
        LogginService
    ]
})
export class CoreModule{}