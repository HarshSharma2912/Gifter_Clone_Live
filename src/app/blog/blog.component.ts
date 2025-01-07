import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/constant';
import { DataTransferService } from '../service/data-transfer.service';

 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 
  Data:any;
  isCollapsed = false;
  message = 'expanded';

  constructor(private router:Router, private dataService:DataTransferService){}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.Data = Data;
  }
  
  navigateTo(value : any ){ 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([value]);
  }
  navigateToCommon(value:any, index:any){ 
    this.dataService.setIndex(index);
    this.router.navigate([value]); 
  }
  navigateToDiscription(index:any){
    this.dataService.setIndex(0); 
    this.dataService.setChildIndex(index); 
    this.router.navigate(['/description']); 

  }
 
  collapsed(): void {
    this.message = 'collapsed';
    // console.log(this.message)
  }
 
 
  expanded(): void {
    this.message = 'expanded';
    // console.log(this.message) 
  }
  backToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  
}
