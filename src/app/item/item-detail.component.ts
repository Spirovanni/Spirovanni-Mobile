import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Card } from "../@core/models/Card";
import { ApiService } from "../@core/services/api.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    card: Card;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        // this.item = this.apiService.getItem(id);
    }
}
