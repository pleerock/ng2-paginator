import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Paginator} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">
    <paginator [onPage]="5" [total]="100" [maxVisible]="5"></paginator>
</div>
`,
    directives: [Paginator]
})
export class Sample1App {

}

bootstrap(Sample1App);