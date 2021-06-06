import { Component, OnInit } from '@angular/core';
import {openDB} from "idb";
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.scss']
})
export class OilComponent implements OnInit {

    dbPromise: any
    username: string  = ''
    price: number = 600
    idInterval: any;

    constructor() { }

        ngOnInit(): void {
            this.changePriceByTimeout();
            this.dbPromise = openDB('module-federation', 1, {
                upgrade(db) {
                    db.createObjectStore('host');
                },
            });
            this.setOilFlag()
            this.setUserName()
        }

        ngOnDestroy(): void {
            if (this.idInterval) {
                clearInterval(this.idInterval);
              }
        }


        changePriceByTimeout(): void {            
            this.idInterval = setInterval(() => {
                const randomNumber = Math.round(Math.random() * 2 - 0.9);

            console.log(randomNumber)
                this.price+= randomNumber
            }, 1000);
        }

        async setOilFlag() {
            (await this.dbPromise).put('host', true, 'oil')
        }

        async setUserName() {
            (await this.dbPromise).get('host', 'user').then((value: string) => this.username = value)
        }
}
