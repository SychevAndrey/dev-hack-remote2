import { Component, OnInit } from '@angular/core';
import {openDB} from "idb";

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.scss']
})
export class BTCComponent implements OnInit {

  constructor() { }

  dbPromise: any
  price = 35000;
  idInterval: any;
  cash: number = 0
    canBuy: number = 0

  ngOnInit(): void {
    this.changePriceByTimeout();
    this.dbPromise = openDB('module-federation', 1, {
      upgrade(db) {
          db.createObjectStore('host');
      },
  });
    this.setUserCash()
  }

  changePriceByTimeout(): void {            
    this.idInterval = setInterval(() => {
        const randomNumber = Math.round(Math.random() * 100 - 0.9);
        this.price+= randomNumber
    }, 1000);
  }


  async setUserCash() {
      (await this.dbPromise).get('host', 'cash').then((value: number) => this.cash = value)
  }

  ngOnDestroy(): void {
    if (this.idInterval) {
        clearInterval(this.idInterval);
      }
  }
}
