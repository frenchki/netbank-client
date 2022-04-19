import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FourEightLayoutComponent } from "./shared/layouts/four-eight-layout.component";
import { TwoTenLayoutComponent } from "./shared/layouts/two-ten-layout.component";
import { LoggerService } from "./shared/services/logger.service";
import { RouteTitleService } from "./shared/services/route-title.service";
import { HttpLoaderFactory } from "./shared/utilities/http-loader-factory";

@NgModule({
    declarations: [
        TwoTenLayoutComponent,
        FourEightLayoutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: "en",
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    providers: [
        LoggerService,
        RouteTitleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(private _routeTitleService: RouteTitleService){

    }
}
