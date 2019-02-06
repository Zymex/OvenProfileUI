import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  constructor() { }
  public lineChartLabels: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public lineChartData: any = [
    {data: [{
      x: 1,
      y: 5
    }], label: 'Oven Profile Data'},

  ];
  public lineChartType: any = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {
  }

}
