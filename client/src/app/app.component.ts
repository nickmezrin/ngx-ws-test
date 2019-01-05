import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WebSocketService } from './shared/services/websocket.service';
import * as Chart from 'chart.js';
import { plotConfig } from './shared/utils/plot.config';
;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('canvas') canvas: HTMLCanvasElement;
  public chart: Chart;
  public currentValues: {value: number}[] = new Array(3).fill({value: 0});
  public animationCollection = new Array(3).fill(false);
  constructor(
    private readonly wsService: WebSocketService
  ) { 
    let x = 1;
    this.wsService.messages.subscribe((message: {value: number}[]) => {
      this.animationCollection = message.map((x,i) => this.currentValues[i].value - x.value > 0);
      this.currentValues = message;
      const sets = this.chart.data.datasets;
      for (let i = 0; i < sets.length; i++) {
        sets[i].data = [...sets[i].data, message[i].value] as any;
      }
      this.chart.data.labels.push(x.toString());
      x+=1;
      this.chart.update();
    })
  }


  ngOnInit() { 
    const ctx = (document.getElementById('canvas') as HTMLCanvasElement).getContext('2d');
    this.chart = new Chart(ctx, <Chart.ChartConfiguration>plotConfig);
  }

  public hasToTopAnimation(idx: number): boolean {
    return this.animationCollection[idx];
  }

  public hasToBottomAnimation(idx: number): boolean {
    return !this.animationCollection[idx];
  }


}
