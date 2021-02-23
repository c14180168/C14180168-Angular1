import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  a=0
  b=0
  turn = 0
  cek = 0
  arr : string[][] = []

  ngOnInit(){
    for(let i :number = 0; i < 5; i++) {
            this.arr[i] = [];
            for(var j :number = 0; j< 5; j++) {
                this.arr[i][j] = "*";
            }
        }
  }

  go(){
    if(this.turn == 0){
      this.turn = 1
    }
    else if(this.turn == 1){
      this.turn = 0
    }
    this.arr[`${this.a}`][`${this.b}`] = this.turn
    alert(this.arr)
    this.win()
  }

  win(){
    for(let i =0;i<5;i++){
      this.cek = 0
      if(this.arr[0][i] == "1"){

      }
      else if(this.arr[0][i] == "0"){

      }
    }
  }
}
