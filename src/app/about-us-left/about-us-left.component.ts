import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-about-us-left',
  templateUrl: './about-us-left.component.html',
  styleUrls: ['./about-us-left.component.scss']
})
export class AboutUsLeftComponent {
  isColor:any = -1;
  isBlack:any = 1;


  constructor(private router: Router, private dataservice: DataTransferService){}
  changeMenu(value :any){
      this.isBlack = value;
  }


  navigateTo(value : any, heading:any){
    this.dataservice.footerHeadin = heading
    this.dataservice.footerHeading(heading);
    this.router.navigate([value]);
    
  }
}
