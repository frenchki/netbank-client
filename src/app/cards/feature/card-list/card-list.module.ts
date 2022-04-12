import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CardListRoutingModule } from "./card-list-routing.module";
import { CardListComponent } from "./card-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CardListRoutingModule,
    ],
    declarations: [
        CardListComponent
    ],
})
export class CardListModule { }