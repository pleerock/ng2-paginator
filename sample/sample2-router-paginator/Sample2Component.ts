import {Component} from "@angular/core";

@Component({
    selector: "sample2-component",
    template: `

    <!-- PARAM PAGINATOR-->
    
    <!-- default paginator -->
    <route-paginator 
        param="page" 
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>

    <!-- simple paginator without any additional controls -->
    <route-paginator 
        param="page" 
        [directionLinks]="false"
        [boundaryLinks]="false"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with next/prev custom labels -->
    <route-paginator 
        param="page" 
        [directionLinks]="true"
        directionNextLabel="next >>"
        directionPreviousLabel="<< prev"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary buttons -->
    <route-paginator 
        param="page" 
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary custom labels -->
    <route-paginator 
        param="page" 
        [boundaryLinks]="true"
        boundaryFirstLabel=":first"
        boundaryLastLabel="last:"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is hidden if there are zero pages -->
    <route-paginator 
        param="page" 
        [hideOnSinglePage]="true"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is NOT hidden if there are zero pages -->
    <route-paginator 
        param="page" 
        [hideOnSinglePage]="false"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
    <!-- QUERY PARAM PAGINATOR-->
    
    <!-- default paginator -->
    <route-paginator 
        queryParam="page" 
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>

    <!-- simple paginator without any additional controls -->
    <route-paginator 
        queryParam="page" 
        [directionLinks]="false"
        [boundaryLinks]="false"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with next/prev custom labels -->
    <route-paginator 
        queryParam="page" 
        [directionLinks]="true"
        directionNextLabel="next >>"
        directionPreviousLabel="<< prev"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary buttons -->
    <route-paginator 
        queryParam="page" 
        [boundaryLinks]="true"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator with boundary custom labels -->
    <route-paginator 
        queryParam="page" 
        [boundaryLinks]="true"
        boundaryFirstLabel=":first"
        boundaryLastLabel="last:"
        [onPage]="5" 
        [total]="100" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is hidden if there are zero pages -->
    <route-paginator 
        queryParam="page" 
        [hideOnSinglePage]="true"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
    <!-- paginator that is NOT hidden if there are zero pages -->
    <route-paginator 
        queryParam="page" 
        [hideOnSinglePage]="false"
        [onPage]="5" 
        [total]="5" 
        [maxVisible]="5"></route-paginator>
        
`
})
export class Sample2Component {

}