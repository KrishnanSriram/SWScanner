import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home-component/home.component';
import { StartScanComponent } from './start-scan/start-scan.component';
import { ScanCallbackComponent } from './scan-callback/scan-callback.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'startscan',      component: StartScanComponent },
  { path: 'scannow/callback', component: ScanCallbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    StartScanComponent,
    ScanCallbackComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
