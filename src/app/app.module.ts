import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from 'src/upload/upload.component';
import { AnalysisComponent } from 'src/analysis/analysis.component';
import { ChartsModule } from 'ng2-charts';
import { OvenactionsComponent } from 'src/ovenactions/ovenactions.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';

@NgModule({
   declarations: [
      AppComponent,
      UploadComponent,
      AnalysisComponent,
      OvenactionsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ChartsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      Ng2LoadingSpinnerModule.forRoot({
      spinnerColor   : '#000'})

   ],
   providers: [
   ],
   bootstrap: [
      AppComponent,

   ]
})
export class AppModule { }
