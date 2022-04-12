import { Injectable, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable()
export class RouteTitleService implements OnDestroy {

    private _navigationEndSubscription!: Subscription;
    private _translationStreamSubscription!: Subscription;

    constructor(
        private _router: Router,
        private _titleService: Title,
        private _translateService: TranslateService
    ){
        /**
         * We subscribe to the router events and if NavigationEnd event is found we use a map to tranform the value that will be emitted to be the routes title if it exists.
         */
        this._navigationEndSubscription = this._router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => {
                let rootRoute: ActivatedRoute = this._router.routerState.root;
                let routeTitle: string;

                while(rootRoute!.firstChild) {
                    rootRoute = rootRoute.firstChild;
                }

                return rootRoute!.snapshot.data["title"] ? rootRoute!.snapshot.data["title"] : "";
            })
        ).subscribe((title: string) => {
            if(title){
                this._translationStreamSubscription = this._translateService.stream(title).subscribe((translatedTitle: string) => {
                    this._titleService.setTitle(translatedTitle);
                });
            } else {
                //TODO: Set this to application specific empty title. This should probably be its own service that handles setting the title for the application.
                this._titleService.setTitle("");
            }
        });
    }

    ngOnDestroy(): void {
        this._navigationEndSubscription.unsubscribe();
        this._translationStreamSubscription.unsubscribe();
    }
}