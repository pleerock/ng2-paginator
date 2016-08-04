# ng2-paginator

Simple pagination bar control for your angular2 applications using bootstrap3.
Does not depend of jquery. If you don't want to use it without bootstrap - simply create proper css classes. 
Please star a project if you liked it, or create an issue if you have problems with it.

## Installation

1. Install npm module:
    
    `npm install ng2-paginator --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ng2-paginator": "node_modules/ng2-paginator"
        },
        "packages": {
            "ng2-paginator": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

There are two components.

First is a `paginator` is a simple control that shows pages and emits events when page is being chagned:

```html
<paginator [total]="50"
           [onPage]="5"
           [currentPage]="1"
           [maxVisible]="5"
           (onChange)="someActionOnPageChange()"
           [directionLinks]="true"
           directionNextLabel="Next"
           directionPreviousLabel="Prev"
           [boundaryLinks]="true"
           boundaryFirstLabel="First"
           boundaryLastLabel="Last"
           [hideOnSinglePage]="true">
</paginator>
```

* `total` - a total number of items of the content you show
* `onPage` - number of items of content you show per page
* `currentPage` - currently selected page
* `maxVisible` - maximum number of pages visible for selection (to prevent pages overflow)
* `(onChange)` - event emitted when user changes the page
* `directionLinks` - Shows direction (prev/next) buttons. Default is **true**.
* `directionNextLabel` - Label for the next direction button. Default is **»**.
* `directionPreviousLabel` - Label for the previous direction button. Default is **«**.
* `boundaryLinks` - Shows boundary (first/last) buttons. Default is **false**.
* `boundaryFirstLabel` - Label for the first boundary button. Default is **First**.
* `boundaryLastLabel` - Label for the last boundary button. Default is **Last**.
* `hideOnSinglePage` - hides the whole paginator if there is only one page. Default is **true**.


Second is a `router-paginator` that shows pages and re-navigates using router parameters when page is being chagned.

```html
<router-paginator  paramName="page"
                   [total]="50"
                   [onPage]="5"
                   [currentPage]="1"
                   [maxVisible]="5"
                   (onChange)="someActionOnPageChange()"
                   [directionLinks]="true"
                   directionNextLabel="Next"
                   directionPreviousLabel="Prev"
                   [boundaryLinks]="true"
                   boundaryFirstLabel="First"
                   boundaryLastLabel="Last"
                   [hideOnSinglePage]="true">
</router-paginator>
```

* `paramName` - router parameter name to be used to store page
* `total` - a total number of items of the content you show
* `onPage` - number of items of content you show per page
* `currentPage` - currently selected page
* `maxVisible` - maximum number of pages visible for selection (to prevent pages overflow)
* `(onChange)` - event emitted when user changes the page
* `directionLinks` - Shows direction (prev/next) buttons. Default is **true**.
* `directionNextLabel` - Label for the next direction button. Default is **»**.
* `directionPreviousLabel` - Label for the previous direction button. Default is **«**.
* `boundaryLinks` - Shows boundary (first/last) buttons. Default is **false**.
* `boundaryFirstLabel` - Label for the first boundary button. Default is **First**.
* `boundaryLastLabel` - Label for the last boundary button. Default is **Last**.
* `hideOnSinglePage` - hides the whole paginator if there is only one page. Default is **true**.


## Sample

Using simple paginator:

```typescript
import {Component} from "@angular/core";
import {Paginator} from "ng2-paginator";

@Component({
    selector: "app",
    template: `
    <div class="container">

        <!-- default paginator -->
        <paginator
            [onPage]="5"
            [total]="100"
            [maxVisible]="5"></paginator>

        <!-- simple paginator without any additional controls -->
        <paginator
            [directionLinks]="false"
            [boundaryLinks]="false"
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

        <!-- paginator that is hidden if there are zero pages -->
        <paginator
            [hideOnSinglePage]="true"
            [onPage]="5"
            [total]="5"
            [maxVisible]="5"></paginator>

        <!-- paginator that is NOT hidden if there are zero pages -->
        <paginator
            [hideOnSinglePage]="false"
            [onPage]="5"
            [total]="5"
            [maxVisible]="5"></paginator>

    </div>
    `,
    directives: [Paginator]
})
export class App {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-paginator/tree/master/sample) for more examples of
usages.
