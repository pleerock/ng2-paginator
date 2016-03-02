import {Component, Output, EventEmitter} from "angular2/core";
import {BasePaginator} from "./BasePaginator";

@Component({
    selector: "paginator",
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
    inputs: ["total", "onPage", "currentPage", "maxVisible"]
})
export class Paginator extends BasePaginator {

    // -------------------------------------------------------------------------
    // Output
    // -------------------------------------------------------------------------

    @Output()
    onChange = new EventEmitter();

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    changePage(page: number): boolean {
        const isPageChanged = super.changePage(page);
        if (isPageChanged)
            this.onChange.emit(page);
        
        return isPageChanged;
    }

}