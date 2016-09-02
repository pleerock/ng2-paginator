import {Paginator} from "./Paginator";
import {RoutePaginator} from "./RoutePaginator";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

export * from "./Paginator";
export * from "./RoutePaginator";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Paginator,
        RoutePaginator,
    ],
    exports: [
        Paginator,
        RoutePaginator,
    ],
})
export class PaginatorModule {

}