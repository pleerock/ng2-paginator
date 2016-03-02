import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {Paginator} from "../../src/Paginator";

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