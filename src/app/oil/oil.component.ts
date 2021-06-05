import { Component, OnInit } from '@angular/core';
import {openDB} from "idb";

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

    dbPromise: any

    constructor() { }

        ngOnInit(): void {
            this.dbPromise = openDB('module-federation', 1, {
                upgrade(db) {
                    db.createObjectStore('host');
                },
            });
            this.setOilFlag()
        }

        async setOilFlag() {
            (await this.dbPromise).put('host', true, 'oil')
        }
}
