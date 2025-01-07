import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/constant';
import { ModalComponent } from '../modal/modal.component'; // Import your ModalComponent
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal from ng-bootstrap

import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  Data : any;
  ngOnInit(): void {
      this.Data = Data;
  }

  // showCategory = false;
  // toggleNav = false;
  navBottom:any;

  constructor(private modalService: NgbModal,private renderer: Renderer2,private router: Router, private dataService: DataTransferService,private el: ElementRef ){}

  // showBottom(value : any){

  //   if(value == 'category'){
  //    this.showCategory = !this.showCategory;
  //   }
  //   else if(value == 'Offer'){
  //     this.showCategory = !this.showCategory;
  //     this.toggleNav = true;
  //   }
  //   else{
  //     this.showCategory = !this.showCategory; 
  //   }
    
  //   if(this.showCategory){
  //     this.renderer.addClass(document.body, 'no-scroll');
  //   }
  //   else{
  //     this.renderer.removeClass(document.body, 'no-scroll');


  //   }

  // }

pasCategory(value :any){

 this.navBottom = value;
}
  goToHome(){
    this.router.navigate(['']);
  }
  

  passIndex(index : any){
    this.dataService.setIndex(index);
    this.router.navigate(['/category']);
   
    
  }
   
  
  offerImg:any = [
    {
      img:"https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_2023-08-08t08_32_481691508773.png&w=256&q=75",
      heading:"Baja Finserv Offer",
      text : "25% OFF on SonyLiv & 200+ brands",
    },
    {
      img:"https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_sbi_yono1677605521.png&w=256&q=75",
      heading : "SBI YONO Card Offer",
      text : "Earn 2% E Coins on Amazone",
    },
    {
      img:"https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_irctc1677604941.png&w=384&q=75",
      heading:"IRCTC Offer",
      text : "30% OFF on Bata & 200 more brands",
    },
    {
      img:"https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_irctc1677604941.png&w=384&q=75",
      heading:"IRCTC Offer",
      text : "30% OFF on Bata & 200 more brands",
    },
    {
      img:"https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_2023-08-08t08_32_481691508773.png&w=256&q=75",
      heading:"Baja Finserv Offer",
      text : "25% OFF on SonyLiv & 200+ brands",
    },
    
    
  ]

  @ViewChild(ModalComponent) modalComponent!: ModalComponent   ;

  @ViewChild('exampleModalCenter') modal: any;

  

  openModal() {
    this.modalService.open(this.modal, { centered: true }); // Open the modal
  }

  closeModal() {
    this.modalService.dismissAll(); // Close all modals
  }

  ModalShow(){ 
    this.dataService.openModal(true);
  }

}

 