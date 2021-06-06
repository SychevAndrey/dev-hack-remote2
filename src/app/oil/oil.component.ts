import { Component, OnInit } from '@angular/core';
import {openDB} from "idb";

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

    dbPromise: any
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
            this.setUserCash()
        }

        ngOnDestroy(): void {
            if (this.idInterval) {
                clearInterval(this.idInterval);
              }
        }


        changePriceByTimeout(): void {            
            this.idInterval = setInterval(() => {                
                this.canBuy = Math.round(this.cash / this.price);
                
            }, 1000);
        }



        async setUserCash() {
            (await this.dbPromise).get('host', 'cash').then((value: number) => {
                if (!value) return                  
                this.cash = value
            })
        }
}
