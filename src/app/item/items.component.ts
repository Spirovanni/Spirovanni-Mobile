import { Component, OnInit } from "@angular/core";

import { Card } from "../@core/models/Card";
import { ApiService } from "../@core/services/api.service";


@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    cards: Array<Card>;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();
    }
}
