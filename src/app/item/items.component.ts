import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ApiService } from "./../@core/services/api.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ApiService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
