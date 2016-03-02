import {Component, Input, OnInit} from "angular2/core";
import {RouteParams, Router, ROUTER_DIRECTIVES, RouterOutlet} from "angular2/router";
import {BasePaginator} from "./BasePaginator";

@Component({
    selector: "router-paginator",
    template: `
<nav>
    <ul class="pagination">
        <li [ngClass]="{ 'disabled': currentPage === 1 }">
            <a (click)="changePage(1)">first</a>
        </li>
        <li [ngClass]="{ 'disabled': currentPage === 1 }">
            <a (click)="changePage(currentPage - 1)" aria-label="Next">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li *ngFor="#page of getPages()" [ngClass]="{ 'active': currentPage === page }">
            <a (click)="changePage(page)">{{ page }}</a>
        </li>
        <li [ngClass]="{ 'disabled': currentPage === getTotalPagesCount() }">
            <a (click)="changePage(currentPage + 1)" aria-label="Previous">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
        <li [ngClass]="{ 'disabled': currentPage === getTotalPagesCount() }">
            <a (click)="changePage(getTotalPagesCount())">last</a>
        </li>
    </ul>
</nav>
`,
    inputs: ["total", "onPage", "currentPage", "maxVisible"],
    directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
export class RouterPaginator extends BasePaginator implements OnInit {

    // -------------------------------------------------------------------------
    // Input
    // -------------------------------------------------------------------------

    @Input()
    route: any[];

    @Input()
    pageParamName = "page";

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private router: Router, private routeParams: RouteParams) {
        super();
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    ngOnInit() {
        this.currentPage = parseInt(this.routeParams.get(this.pageParamName)) || 1;
    }

    changePage(page: number) {
        const isPageChanged = super.changePage(page);
        if (isPageChanged)
            this.router.navigate(this.buildRoute(page));

        return isPageChanged;
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private buildRoute(page: number) {
        const route = Object.assign([], this.route);
        if (!route[1]) route[1] = {};
        route[1][this.pageParamName] = page;
        return route;
    }

}