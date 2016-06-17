import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Paginator} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- simple paginator -->
    <paginator 
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></paginator>
        
    <!-- paginator with next/prev buttons -->
    <paginator 
        [directionLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></paginator>
        
    <!-- paginator with next/prev custom labels -->
    <paginator 
        [directionLinks]="true"
        directionNextLabel="next >>"
        directionPreviousLabel="<< prev"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></paginator>
        
    <!-- paginator with boundary buttons -->
    <paginator 
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></paginator>
        
    <!-- paginator with boundary custom labels -->
    <paginator 
        [boundaryLinks]="true"
        boundaryFirstLabel=":first"
        boundaryLastLabel="last:"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></paginator>
        
    <!-- paginator with both direction and boundary buttons -->
    <paginator 
        [directionLinks]="true"
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></paginator>
        
    <!-- paginator that is hidden if there are zero pages -->
    <paginator 
        [hideOnSinglePage]="true"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></paginator>
        
        
</div>
`,
    directives: [Paginator]
})
export class Sample1App {

}

bootstrap(Sample1App);