import { Component, OnInit } from '@angular/core';
import {openDB} from "idb";

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

    dbPromise: any
    username: string  = ''
    price: number = 60
    idInterval: any
    cash: number = 0
    canBuy: number = 0

    constructor() { }

        ngOnInit(): void {
            this.changePriceByTimeout();
            this.dbPromise = openDB('module-federation', 1, {
                upgrade(db) {
                    db.createObjectStore('host');
                },
            });
            this.setOilFlag()
            this.setUserCash()
        }

        ngOnDestroy(): void {
            if (this.idInterval) {
                clearInterval(this.idInterval);
              }
        }


        changePriceByTimeout(): void {            
            this.idInterval = setInterval(() => {
                const randomNumber = Math.round(Math.random() * 2 - 0.9);
                this.price+= randomNumber
                this.canBuy = Math.round(this.cash / this.price);
            }, 1000);
        }

        async setOilFlag() {
            (await this.dbPromise).put('host', true, 'oil')
        }

        async setUserCash() {
            (await this.dbPromise).get('host', 'cash').then((value: number) => this.cash = value)
        }
}
