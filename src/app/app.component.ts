import {  Component, OnInit, Renderer2 } from '@angular/core';
import { Data } from 'src/assets/constant';
import { DataTransferService } from './service/data-transfer.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit   {
  title = 'BenepikGifter';
  control = new FormControl('');
  showCommonModal:boolean = false;
 
  Data:any;


  constructor(private router: Router,private dataService : DataTransferService,private renderer: Renderer2){}

  ngOnInit(): void {
      // alert("hh0fffffffffffffff");
      this.Data = Data;
      console.log("Data is ->",this.Data);

      this.dataService.modalObserve.subscribe((res)=>{
        this.showCommonModal = res;
         console.log("value get from modal component->",res);    
      })
  }

 

  
  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Georgia'
    },
     {
       id: 2,
       name: 'Usa'
     },
     {
       id: 3,
       name: 'England'
     }
  ];


  selectEvent(item:any) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e:any){
    // do something when input is focused
  }



 
  // NotShowFirst = true;


 

 

   

 }
