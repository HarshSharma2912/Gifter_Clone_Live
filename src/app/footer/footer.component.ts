import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  showCommonModal:boolean =false;
  constructor(private router: Router, private dataService:DataTransferService){}
  isMediumScreen(): boolean {
    return window.matchMedia('(min-width: 768px)').matches;
  }


  navigateTo(value : any, heading:any){
    this.dataService.footerHeadin = heading;
    // console.log("Heading is",this.dataService.footerHeadin)
    // this.dataService.callModal();
    this.dataService.footerHeading(heading);
    this.router.navigate([value]);
  }

  openModalFooter(){
    this.showCommonModal = !this.showCommonModal;
    this.dataService.openModal(this.showCommonModal);
  }
  ModalShow(){ 
    this.dataService.ModalNumber = 1;
    this.dataService.openModal(true);
  }

}
