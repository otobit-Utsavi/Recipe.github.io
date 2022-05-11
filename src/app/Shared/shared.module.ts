import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LogginService } from "../loggin.service";
import { AlertComponent } from "./alert/alert.component";
import { CommonService } from "./common.service";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule],
        providers:[LogginService, CommonService]
})
export class SharedModule{}