import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StopWatchAngular';

  timerValue: number = 0;
  milliSec: number = 0;

  secTimer: any; //seconds timer
  milliSecTimer:any;

  elements:string[] = [];
  timerSnapshot :string = '';

  ngOnInit() {
  }

  startTimer(){
    console.log("timer Started")
    this.secTimer = setInterval(() => {
      this.timerValue++;
    }, 1000); // Update the timer every 1000 milliseconds (1 second)
    this.milliSecTimer = setInterval(()=>{
      if(this.milliSec<59){
        this.milliSec++;
      } else {
        this.milliSec = 0;
      }
    }, 10)

  }
  stopTimer() {
    clearInterval(this.secTimer);
    clearInterval(this.milliSecTimer);
    this.timerSnapshot = ''+ this.timerValue + '.'+ this.milliSec+' s';
      this.elements.push(this.timerSnapshot);
  }

  resetTimer() {
    clearInterval(this.secTimer);
    clearInterval(this.milliSecTimer);
    this.timerValue = 0;
    this.milliSec = 0;
  }
}
