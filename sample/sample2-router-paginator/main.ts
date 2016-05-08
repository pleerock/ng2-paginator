import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component, provide} from "@angular/core";
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig} from "@angular/router-deprecated";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {RouterPaginator} from "../../src/index";

@Component({
    selector: "answer-list",
    template: `
<div class="container">
    <router-paginator [onPage]="5" [total]="100" [maxVisible]="5" [route]="['AnswerList', { questionId: 1 }]"></router-paginator>
</div>
`,
    directives: [RouterPaginator]
})
export class AnswerList {

}

@RouteConfig([
    { path: "/answers/:questionId", name: "AnswerList", component: AnswerList }
])
@Component({
    selector: "app",
    template: `
<div class="container">
    Go to #/answers/1 page.
    <router-outlet></router-outlet>
</div>
`,
    directives: [RouterOutlet]
})
export class Sample2App {

}


bootstrap(Sample2App, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);