import {  Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../service/data-transfer.service';
import { Data } from 'src/assets/constant';
declare const bootstrap: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss', './header.component.scss']
})
export class HeaderComponent implements OnInit {

  showModal = false;
  showSubModal = false;
  category = false;
  occasions = false;
  closeSide = false;
  greenLine:any = -1;
  showDiv: any = -1;

  Data:any;
  drawerArr:any = [
    'HOME','CATEGORIES','DISCOUNT','OFFERS','OCCASIONS','CORPORATE GIFTING','WRITE & EARN','CHECK VOUCHER STATUS',"FAQ'S",'CONTACT US'
 ]

  constructor(private router: Router,private dataService : DataTransferService,private renderer: Renderer2){}

  ngOnInit(): void {


    this.Data = Data;
    // console.log("Data is ->",this.Data); 
}

 
 
  toggleSidenav(closeNav : boolean) {
    this.showModal = closeNav;
    this.closeSide = !closeNav;
    if(this.showModal){
      this.renderer.addClass(document.body, 'no-scroll');
    }else{
      this.renderer.removeClass(document.body, 'no-scroll');
    }
    
  }

  toggleSidenSubNab(item : any){
    this.showSubModal = !this.showSubModal;
    // console.log("item is ->",item);
    
    if(item == 'CATEGORIES'){
      this.occasions = false;
      this.category = true;
      
    }
    else if(item == 'OCCASIONS'){
      this.category = false;
      this.occasions = true;
    }
    // this.NotShowFirst = !this.NotShowFirst;
  }


  passIndex(index : any){
    this.dataService.setIndex(index);

    this.router.navigate(['/category']);
    
  }


  goToHome(){
    this.router.navigate(['']);
  }

  passCurrentIndex(index:any){
    this.showDiv = -1;
    this.dataService.setIndex(index);
    //  console.log("Index is ->iisi",index); 
    this.router.navigate(['/category']);
  }

  parentIndex:any;
  passChildIndex(childIndex:any){
    this.showDiv = -1;
    // console.log("child index is---->",childIndex,this.parentIndex);
    this.dataService.index =this.parentIndex;
    this.dataService.childIndex = childIndex;
    this.dataService.setChildIndex(childIndex);
    this.dataService.setIndex(this.parentIndex);

     
    // localStorage.setItem('myIndex', this.showDiv.toString()); 
    
    
     this.router.navigate(['/description']);
  }
  ModalNumber:any;


  ModalShow(){ 
    this.ModalNumber=2;
    this.dataService.ModalNumber = this.ModalNumber;
     this.dataService.openModal(true);
  }
}
