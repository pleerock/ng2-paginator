export abstract class BasePaginator {

    // -------------------------------------------------------------------------
    // Input
    // -------------------------------------------------------------------------

    total: number;
    onPage: number;
    currentPage: number = 1;
    maxVisible: number;

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    changePage(page: number): boolean {
        if (page < 1 || page > this.getTotalPagesCount())
            return false;

        this.currentPage = page;
        return true;
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