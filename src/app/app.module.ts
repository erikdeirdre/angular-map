import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadModule } from './upload/upload.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

/*
const appRoutes: routes = [
  { path: 'upload', component: UploadComponent },
  { path: '', component: AppComponent },
  ]
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UploadModule,
//    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
