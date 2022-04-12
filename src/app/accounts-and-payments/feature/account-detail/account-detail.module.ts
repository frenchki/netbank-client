import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AccountDetailRoutingModule } from "./account-detail-routing.module";
import { AccountDetailComponent } from "./account-detail.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccountDetailRoutingModule,
    ],
    declarations: [
        AccountDetailComponent
    ],
})
export class AccountDetailModule { }