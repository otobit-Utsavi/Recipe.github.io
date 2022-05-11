import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CommonService {
    constructor(
    ) { }


    getURL() {
        return environment.baseUrl;
    }


}
