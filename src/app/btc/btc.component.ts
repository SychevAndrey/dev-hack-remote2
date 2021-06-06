import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.scss']
})
export class BTCComponent implements OnInit {

  constructor() { }

  price = 35000;
  idInterval: any;

  ngOnInit(): void {
    this.changePriceByTimeout();
  }

  changePriceByTimeout(): void {            
    this.idInterval = setInterval(() => {
        const randomNumber = Math.round(Math.random() * 100 - 0.9);
        this.price+= randomNumber
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.idInterval) {
        clearInterval(this.idInterval);
      }
  }
}
