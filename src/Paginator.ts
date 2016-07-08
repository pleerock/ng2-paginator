import {Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
    selector: "paginator",
    template: `
<nav class="paginator" [class.hidden]="hideOnSinglePage && getPages().length <= 1">
    <ul class="pagination">
        <li [ngClass]="{ hidden: !boundaryLinks, disabled: currentPage === 1 }">
            <a (click)="changePage(1)" [attr.aria-label]="boundaryFirstLabel">{{ boundaryFirstLabel }}</a>
        </li>
        <li [ngClass]="{ hidden: !directionLinks, disabled: currentPage === 1 }">
            <a (click)="changePage(currentPage - 1)" aria-label="Previous">
                <span aria-hidden="true">{{ directionPreviousLabel }}</span>
            </a>
        </li>
        <li *ngFor="let page of getPages()" [ngClass]="{ active: currentPage === page }">
            <a (click)="changePage(page)">{{ page }}</a>
        </li>
        <li [ngClass]="{ hidden: !directionLinks, disabled: currentPage === getTotalPagesCount() }">
            <a (click)="changePage(currentPage + 1)" aria-label="Next">
                <span aria-hidden="true">{{ directionNextLabel }}</span>
            </a>
        </li>
        <li [ngClass]="{ hidden: !boundaryLinks, disabled: currentPage === getTotalPagesCount() }">
            <a (click)="changePage(getTotalPagesCount())" [attr.aria-label]="boundaryLastLabel">{{ boundaryLastLabel }}</a>
        </li>
    </ul>
</nav>
`, styles: [`
nav.paginator ul.pagination li {
    cursor: pointer;
   -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
nav.paginator ul.pagination .hidden {
    display: none;
}
`]
})
export class Paginator {

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    @Input()
    total: number;

    @Input()
    onPage: number;

    @Input()
    currentPage: number = 1;

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
    // Public Methods
    // -------------------------------------------------------------------------

    changePage(page: number) {
        if (page < 1 || page > this.getTotalPagesCount())
            return;

        this.currentPage = page;
        this.onChange.emit(page);
    }

    getPages() {
        const pages: number[] = [];
        let startFrom = 1;
        let totalPagesCount = this.getTotalPagesCount();
        let endWith = totalPagesCount;

        if (this.maxVisible) {
            startFrom = Math.max(this.currentPage - Math.floor(this.maxVisible / 2), 1);
            endWith = startFrom + this.maxVisible - 1;
            if (endWith > totalPagesCount) {
                endWith = totalPagesCount;
                startFrom = endWith - this.maxVisible + 1;
            }
            if (startFrom < 1)
                startFrom = 1;
        }

        for (let i = startFrom; i <= endWith; i++) {
            pages.push(i);
        }

        return pages;
    }

    getTotalPagesCount() {
        return Math.ceil(this.total / this.onPage);
    }

}