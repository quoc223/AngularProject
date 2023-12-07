import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    
  }
  Trangchu: OwlOptions={
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    dots :true,
    autoplay:true,
    autoWidth:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    navSpeed:50,
    navText:['<','>'],
    responsive:{
      0:{
        items:1
      },
      300:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:1
      }
    },
    nav:true
  }
}

