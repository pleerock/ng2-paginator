import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Paginator} from "../../src/index";
import {RoutePaginator} from "../../src/RoutePaginator";
import {provideRouter} from "@angular/router";

@Component({
    selector: "sample2-component",
    template: `

    <!-- PARAM PAGINATOR-->
    
    <!-- default paginator -->
    <route-paginator 
        paramName="page" 
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>

    <!-- simple paginator without any additional controls -->
    <route-paginator 
        paramName="page" 
        [directionLinks]="false"
        [boundaryLinks]="false"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with next/prev custom labels -->
    <route-paginator 
        paramName="page" 
        [directionLinks]="true"
        directionNextLabel="next >>"
        directionPreviousLabel="<< prev"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary buttons -->
    <route-paginator 
        paramName="page" 
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary custom labels -->
    <route-paginator 
        paramName="page" 
        [boundaryLinks]="true"
        boundaryFirstLabel=":first"
        boundaryLastLabel="last:"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is hidden if there are zero pages -->
    <route-paginator 
        paramName="page" 
        [hideOnSinglePage]="true"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is NOT hidden if there are zero pages -->
    <route-paginator 
        paramName="page" 
        [hideOnSinglePage]="false"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
    <!-- QUERY PARAM PAGINATOR-->
    
    <!-- default paginator -->
    <route-paginator 
        queryParamName="page" 
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>

    <!-- simple paginator without any additional controls -->
    <route-paginator 
        queryParamName="page" 
        [directionLinks]="false"
        [boundaryLinks]="false"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with next/prev custom labels -->
    <route-paginator 
        queryParamName="page" 
        [directionLinks]="true"
        directionNextLabel="next >>"
        directionPreviousLabel="<< prev"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary buttons -->
    <route-paginator 
        queryParamName="page" 
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary custom labels -->
    <route-paginator 
        queryParamName="page" 
        [boundaryLinks]="true"
        boundaryFirstLabel=":first"
        boundaryLastLabel="last:"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is hidden if there are zero pages -->
    <route-paginator 
        queryParamName="page" 
        [hideOnSinglePage]="true"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is NOT hidden if there are zero pages -->
    <route-paginator 
        queryParamName="page" 
        [hideOnSinglePage]="false"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
`,
    directives: [RoutePaginator]
})
export class Sample2Component {

}