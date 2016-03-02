# ng2-paginator

Simple pagination bar control for your angular2 applications using bootstrap3.
Does not depend of jquery.

## Installation

`npm install ng2-paginator --save`

## Usage

There are two components.

First is a paginator that shows pages and reacts when they change:

```html
<paginator [total]="50"
           [onPage]="5"
           [currentPage]="1"
           [maxVisible]="5"
           (onChange)="someActionOnPageChange()">
</paginator>
```

* `total` - a total number of items of the content you show
* `onPage` - number of items of content you show per page
* `currentPage` - currently selected page
* `maxVisible` - maximum number of pages visible for selection (to prevent pages overflow)

Second is a paginator that changes *route* when page is changed:

```html
<router-paginator  [total]="50"
                   [onPage]="5"
                   [currentPage]="1"
                   [maxVisible]="5"
                   [route]="['your_route', { routeParam: 'paramValue' }]"
                   pageParamName="page">
</router-paginator>
```

* `total` - a total number of items of the content you show
* `onPage` - number of items of content you show per page
* `currentPage` - currently selected page
* `maxVisible` - maximum number of pages visible for selection (to prevent pages overflow)
* `route` - route where we should go on page change
* `pageParamName` - the name of the page parameter to be passed to a changed route

## Sample

Using simple paginator:

```typescript
import {Component} from "angular2/core";
import {Paginator} from "ng2-paginator/Paginator";

@Component({
    selector: "app",
    template: `
    <div class="container">
        <paginator [onPage]="5" [total]="100" [maxVisible]="5"></paginator>
    </div>
    `,
    directives: [Paginator]
})
export class App {

}
```

Using router paginator:

```typescript
import {Component} from "angular2/core";
import {RouterPaginator} from "ng2-paginator/RouterPaginator";

@Component({
    selector: "app",
    template: `
    <div class="container">
        <router-paginator [onPage]="5" [total]="100" [maxVisible]="5" [route]="['AnswerList', { questionId: 10 }]"></router-paginator>
    </div>
    `,
    directives: [RouterPaginator]
})
export class App {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-progress-bar/tree/master/sample) for more examples of
usages.
