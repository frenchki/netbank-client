import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
    {
        path: "account-list",
        loadChildren: () => import("../account-list/account-list.module").then((m) => m.AccountListModule),
    },
    {
        path: "account-list/:id",
        loadChildren: () => import("../account-detail/account-detail.module").then((m) => m.AccountDetailModule)
    },
    {
        path: "",
        outlet: "left-sidebar",

    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
    ],
    exports: [
        RouterModule
    ]
})
export class AccountsAndPaymentsRoutingModule {}