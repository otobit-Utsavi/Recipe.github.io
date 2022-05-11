import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LogginService } from "../loggin.service";
import { SharedModule } from "../Shared/shared.module";
import { ShoppingComponent } from "./shopping.component";
import { ShppingListComponent } from "./shpping-list/shpping-list.component";

@NgModule({
    declarations:[
        ShoppingComponent,
        ShppingListComponent,
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {path:'',component:ShoppingComponent}
        ]),
        SharedModule
    ],
    // providers:[
    //     LogginService
    // ]
})
export class ShoppingModule{}