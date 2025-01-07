import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
 import { Blog } from 'src/assets/constant';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  blog:any = Blog;
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private router:Router){}
   ngOnInit(): void {
 
  }
 
  onForwardButtonClick(): void {
    if (this.page < 20) {
      this.page++; 
    }
  }

 

  length:any=23;
  onTableDataChange(event: any) {
    this.page = event;
    // console.log("Page is ->",this.page);
 
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
 
  }


  totalItems = 64;
  currentPage = 5;
  smallnumPages = 0;
 
  pageChanged(event: PageChangedEvent): void {
    // console.log('Page changed to: ' + event.page);
    // console.log('Number items per page: ' + event.itemsPerPage);
  }


  navigateTo(value : any ){ 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([value]);
  }


  initial:any = 0;
  final:any = 10;
  nextDisable:boolean = false;
  prevDisable:boolean = true;

  nextPage(){
      if(this.final>=40){
        this.nextDisable = true;
      }else{  
        this.prevDisable = false;
      }
      this.initial+=10;
      this.final+=10;
   }

  prevPage(){
    if(this.initial<=10){
      this.prevDisable   = true;
    }else{
      this.nextDisable = false;
    }
       this.initial-=10;
       this.final-=10;
  }
}
