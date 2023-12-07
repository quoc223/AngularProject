import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { TrangchuComponent } from './trangchu/trangchu.component';

const routes: Routes = [
  {path:'Trang Chủ',component:TrangchuComponent},
  {path:'Thời Sự',component:ThoisuComponent},
  {path:'Giải Trí',component:GiaitriComponent},
  {path:'Kinh Doanh',component:KinhdoanhComponent},
  {path:'Làm Đẹp',component:LamdepComponent},
  {path:'Đăng Nhập',component:DangnhapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
