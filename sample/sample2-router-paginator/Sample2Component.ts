import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Paginator} from "../../src/index";
import {RouterPaginator} from "../../src/RouterPaginator";
import {provideRouter} from "@angular/router";

@Component({
    selector: "sample2-component",
    template: `
    <!-- default paginator -->
    <router-paginator 
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></router-paginator>

    <!-- simple paginator without any additional controls -->
    <router-paginator 
        [directionLinks]="false"
        [boundaryLinks]="false"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></router-paginator>
        
    <!-- paginator with next/prev custom labels -->
    <router-paginator 
        [directionLinks]="true"
        directionNextLabel="next >>"
        directionPreviousLabel="<< prev"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></router-paginator>
        
    <!-- paginator with boundary buttons -->
    <router-paginator 
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></router-paginator>
        
    <!-- paginator with boundary custom labels -->
    <router-paginator 
        [boundaryLinks]="true"
        boundaryFirstLabel=":first"
        boundaryLastLabel="last:"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></router-paginator>
        
    <!-- paginator that is hidden if there are zero pages -->
    <router-paginator 
        [hideOnSinglePage]="true"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></router-paginator>
        
    <!-- paginator that is NOT hidden if there are zero pages -->
    <router-paginator 
        [hideOnSinglePage]="false"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></router-paginator>
        
`,
    directives: [RouterPaginator]
})
export class Sample2Component {

}