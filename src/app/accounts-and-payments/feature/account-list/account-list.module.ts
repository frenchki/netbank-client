import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AccountListRoutingModule } from "./account-list-routing.module";
import { AccountListComponent } from "./account-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccountListRoutingModule,
    ],
    declarations: [
        AccountListComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
    ]
})
export class AccountListModule { }