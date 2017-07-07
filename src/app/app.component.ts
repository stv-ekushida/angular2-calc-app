import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  initValue: number;
  rate: number;

  //計算する
  calc(): number {
    if(isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }

    let answer: number = this.initValue;

    for(let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100);
    }
    return Math.floor(answer);
  }

  // 保存する
  save(): void {
    localStorage.setItem("initValue", this.initValue.toString());
    localStorage.setItem("rate", this.rate.toString());
  }

  // クリアする
  clear(): void {
    localStorage.setItem("initValue", "0");
    localStorage.setItem("rate", "0");
    this.initValue = 0;
    this.rate = 0;
  }

  // アプリ起動時 
  ngOnInit() {
    if(localStorage.getItem("initValue")) {
      this.initValue = Number(localStorage.getItem("initValue"));
      this.rate = Number(localStorage.getItem("rate"));
    } else {
      this.clear();
    }
  }
}
