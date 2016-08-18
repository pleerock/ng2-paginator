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
    paramName: string;

    @Input()
    queryParamName: string;

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
        if (this.queryParamName) {
            this.paramsSubscription = this.activatedRoute.queryParams.subscribe(params => {
                let page = 1;
                if (params[this.queryParamName]) {
                    page = parseInt(params[this.queryParamName]);
                    if (page < 1 || page > this.paginator.getTotalPagesCount())
                        page = 1;
                }
                setTimeout(() => this.paginator.currentPage = page);
            });

        } else if (this.paramName) {
            this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
                let page = 1;
                if (params[this.paramName]) {
                    page = parseInt(params[this.paramName]);
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
        if (this.paramName) {
            const params = Object.assign({}, this.activatedRoute.snapshot.params);
            params[this.paramName] = page;
            const extras: NavigationExtras = {
                fragment: this.activatedRoute.snapshot.fragment,
                queryParams: this.activatedRoute.snapshot.queryParams,
            };
            this.router.navigate([params], extras);

        } else if (this.queryParamName) {
            const extras: NavigationExtras = {
                fragment: this.activatedRoute.snapshot.fragment,
                queryParams: Object.assign({}, this.activatedRoute.snapshot.queryParams),
                relativeTo: this.activatedRoute,
            };
            extras.queryParams[this.queryParamName] = page;
            this.router.navigate([], extras);
        }
        this.onChange.emit(page);
    }

}