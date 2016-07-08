import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {provideRouter, ROUTER_DIRECTIVES} from "@angular/router";
import {Sample2Component} from "./Sample2Component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@Component({
    selector: "app",
    template: `
<div class="container">
    <router-outlet></router-outlet>
</div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class Sample2App {

}

bootstrap(Sample2App, [
    provideRouter([
        { path: "default", component: Sample2Component }
    ]),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
]).catch(err => console.error(err));