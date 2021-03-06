import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { NoteServiceService } from './note-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule,
  BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  providers: [
    StatusBar,
    SplashScreen,
    NoteServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
