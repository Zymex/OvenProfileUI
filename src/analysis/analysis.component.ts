import { Component, OnInit, Input } from '@angular/core';
import { OvenUtilityService } from 'src/_services/ovenUtility.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadComponent } from 'src/upload/upload.component';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],

})
export class AnalysisComponent implements OnInit {
  fileName: string;
  values: any;
  constructor(private ovenUtilityService: OvenUtilityService) { }
  // public lineChartLabels: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
