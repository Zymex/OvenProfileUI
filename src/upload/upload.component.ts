import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { OvenProfile } from 'Models/OvenProfile';
import { Observable } from 'rxjs';
import { OvenUtilityService } from 'src/_services/ovenUtility.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})

export class UploadComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  selectedFiles: FileList;
  currentFileUpload: File;
  fileName: any;
  progress: any;
  values: any;
  rampDownRate: any;
  dwellTime: any;
  chartValues: any;
  ramp: any;
  dwell: any;
  fileStatus: any;
  direction: any;
  clickMe: any;
  dwellBadge: any;
  public onUploadFinished = new EventEmitter();

  constructor(private ovenUtilityService: OvenUtilityService) { }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.rampDownRate = '';
    this.fileName = '';
    this.dwellTime = '';
    this.fileStatus = 'bg-light';
    this.ramp = 'bg-light';
    this.dwell = 'bg-light';
    this.direction = 'Please wait...';
    this.clickMe = 'Analyzing....';
    this.upload();
  }


  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.ovenUtilityService.pushFile(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.fileStatus = 'bg-success';
        this.values = event.body;
        this.fileName = this.values.ovenProfileName;
        this.rampDownRate = this.values.rampDownRate;
        this.dwellTime = this.values.dwellTime;
        if (this.rampDownRate < 5) {
          this.ramp = 'bg-success';
      } else { this.ramp = 'bg-danger'; }
      if (this.dwellTime > 165 && this.dwellTime < 195) {
        this.dwell = 'bg-success';
        this.dwellBadge = 'badge-success';
      } else { this.dwell = 'bg-danger'; this.dwellBadge = 'badge-danger'; }
      this.direction = 'Open Profile';
      this.clickMe = 'Complete';
      }

    });
    this.selectedFiles = undefined;
  }

  ngOnInit() {
    this.fileName = '';
    this.rampDownRate = '';
    this.dwellTime = '';
    this.chartValues = 0;
    this.direction = 'Open Profile';
    this.clickMe = '';
    this.dwellBadge = '';
  }


}
