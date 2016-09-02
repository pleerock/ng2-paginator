import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {Sample2Component} from "./Sample2Component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {PaginatorModule} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">
    <router-outlet></router-outlet>
</div>
`
})
export class Sample2App {

}

@NgModule({
    imports: [
        BrowserModule,
        PaginatorModule,
        RouterModule.forRoot([
            { path: "default", component: Sample2Component }
        ])
    ],
    declarations: [
        Sample2App,
        Sample2Component
    ],
    bootstrap: [
        Sample2App
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ]
})
export class Sample2Module {

}

platformBrowserDynamic().bootstrapModule(Sample2Module);