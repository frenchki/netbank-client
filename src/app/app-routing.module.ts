import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "accounts-and-payments",
        loadChildren: () => import("./accounts-and-payments/feature/accounts-and-payments-shell/accounts-and-payments.module").then((m) => m.AccountsAndPaymentsModule),
const routes: Routes = [];
    },
    {
        path: "cards",
        loadChildren: () => import("./cards/feature/card-shell/card.module").then((m) => m.CardRoutingModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes, 
            {
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
