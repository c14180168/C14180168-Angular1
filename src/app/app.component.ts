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
    this.winhori()
    this.winver()
  }

  winver(){
    for(let i =0;i<5;i++){
      this.cek = 0
      for(let j=0;j<5;j++){
        if(this.arr[j][i] == "1"){
          this.cek++
        }
        else if(this.arr[j][i] == "0"){
          this.cek--
        }
        if(this.cek == 4){
          break
        }
        else if(this.cek == -4){
          break
        }
      }
      if(this.cek == 4){
        break
      }
      else if(this.cek == -4){
        break
      }
    }
    if(this.cek == 4){
      alert("Player 1 Win")
    }
    else if(this.cek == -4){
      alert("Player 0 Win")
    }
  }

  winhori(){
    for(let i =0;i<5;i++){
      this.cek = 0
      for(let j=0;j<5;j++){
        if(this.arr[i][j] == "1"){
          this.cek++
        }
        else if(this.arr[i][j] == "0"){
          this.cek--
        }
        if(this.cek == 4){
          break
        }
        else if(this.cek == -4){
          break
        }
      }
      if(this.cek == 4){
        break
      }
      else if(this.cek == -4){
        break
      }
    }
    if(this.cek == 4){
      alert("Player 1 Win")
    }
    else if(this.cek == -4){
      alert("Player 0 Win")
    }
  }
}
