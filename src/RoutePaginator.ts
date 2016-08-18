import {Component, Output, EventEmitter, Input, ViewChild} from "@angular/core";
import {Paginator} from "./Paginator";
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";

@Component({
    selector: "route-paginator",
    template: `
<div class="route-paginator">
    <paginator  [total]="total" 
                [onPage]="onPage" 
                [maxVisible]="maxVisible" 
                [hideOnSinglePage]="hideOnSinglePage" 
                [boundaryLinks]="boundaryLinks" 
                [directionLinks]="directionLinks" 
                [boundaryFirstLabel]="boundaryFirstLabel" 
                [boundaryLastLabel]="boundaryLastLabel" 
                [directionNextLabel]="directionNextLabel" 
                [directionPreviousLabel]="directionPreviousLabel" 
                (onChange)="changePage($event)"></paginator>
</div>
`,
    directives: [
        Paginator
    ]
})
export class RoutePaginator {

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    @Input()
    param: string;

    @Input()
    queryParam: string;

    @Input()
    total: number;

    @Input()
    onPage: number;
    
    @Input()
    maxVisible: number;

    @Input()
    hideOnSinglePage: boolean = true;

    @Input()
    boundaryLinks: boolean = false;

    @Input()
    directionLinks: boolean = true;

    @Input()
    boundaryFirstLabel = "First";

    @Input()
    boundaryLastLabel = "Last";

    @Input()
    directionNextLabel = "»";

    @Input()
    directionPreviousLabel = "«";

    @Output()
    onChange = new EventEmitter();

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    @ViewChild(Paginator)
    paginator: Paginator;

    // -------------------------------------------------------------------------
    // Private properties
    // -------------------------------------------------------------------------

    private paramsSubscription: Subscription;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------

    ngOnInit() {
        if (this.queryParam) {
            this.paramsSubscription = this.activatedRoute.queryParams.subscribe(params => {
                let page = 1;
                if (params[this.queryParam]) {
                    page = parseInt(params[this.queryParam]);
                    if (page < 1 || page > this.paginator.getTotalPagesCount())
                        page = 1;
                }
                setTimeout(() => this.paginator.currentPage = page);
            });

        } else if (this.param) {
            this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
                let page = 1;
                if (params[this.param]) {
                    page = parseInt(params[this.param]);
                    if (page < 1 || page > this.paginator.getTotalPagesCount())
                        page = 1;
                }
                setTimeout(() => this.paginator.currentPage = page);
            });
        }
    }

    ngOnDestroy() {
        if (this.paramsSubscription)
            this.paramsSubscription.unsubscribe();
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    changePage(page: number) {
        if (this.param) {
            const params = Object.assign({}, this.activatedRoute.snapshot.params);
            params[this.param] = page;
            const extras: NavigationExtras = {
                fragment: this.activatedRoute.snapshot.fragment,
                queryParams: this.activatedRoute.snapshot.queryParams,
            };
            this.router.navigate([params], extras);

        } else if (this.queryParam) {
            const extras: NavigationExtras = {
                fragment: this.activatedRoute.snapshot.fragment,
                queryParams: Object.assign({}, this.activatedRoute.snapshot.queryParams),
                relativeTo: this.activatedRoute,
            };
            extras.queryParams[this.queryParam] = page;
            this.router.navigate([], extras);
        }
        this.onChange.emit(page);
    }

}