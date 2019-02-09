import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent, HttpRequest } from '@angular/common/http';
import { OvenProfile } from 'Models/OvenProfile';
import { EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OvenUtilityService {

public onUploadFinished = new EventEmitter();

constructor(private http: HttpClient) {
}


pushFile(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
  formdata.append('file', file);

  const req = new HttpRequest('POST', 'http://miwebtest/DataAPI/api/OvenUI/', formdata, {
    reportProgress: true,
    responseType: 'json'
  });
  return this.http.request(req);
}

}


