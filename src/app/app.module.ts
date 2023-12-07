import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ThoisuComponent } from './thoisu/thoisu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'

import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from "@angular/material/sidenav";
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThoisuComponent,
    DangnhapComponent,
    GiaitriComponent,
    LamdepComponent,
    KinhdoanhComponent,
    TrangchuComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,

    CarouselModule,
    

    
    
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
