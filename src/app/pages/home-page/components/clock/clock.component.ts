import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  public remainTime = {
    seconds: '',
    minutes: '',
    hours: '',
    days: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.countDown('Sat Mar 20 2021 14:58:01 GMT-0400 (hora de Venezuela)');
  }

  ngOnDestroy(): void {
    clearInterval();
  }

  getRemainTime(deadLine: string) {
    const now: any = new Date();
    const deadLineDate: any = new Date(deadLine);

    let remainTime: number = (deadLineDate - now + 1000) / 1000;

    this.remainTime.seconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    this.remainTime.minutes  = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2);
    this.remainTime.hours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2);
    this.remainTime.days  = Math.floor((remainTime / (3600 * 24))).toString();
  }

  countDown(deadLine: string) {
    setInterval(() => {
      this.getRemainTime(deadLine);
    }, 1000);
  }

}
