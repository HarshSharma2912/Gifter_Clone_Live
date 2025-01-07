import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../service/data-transfer.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private dataService: DataTransferService) { }

  Heading: any;

  ngOnInit(): void {

    this.Heading = this.dataService.footerHeadin;

    // console.log("Headingis oninit->", this.Heading);
    this.dataService.footHead.subscribe((res) => {
      this.Heading = res;
      // console.log("value si ->", res);
      if (this.Heading != undefined) {
        localStorage.setItem('HeadingFooter', this.Heading.toString());

      }
    })

    const storedHeading = localStorage.getItem('HeadingFooter');
    if (storedHeading) {
      // console.log("my getting index from localstorage , ", storedHeading);

      this.Heading = storedHeading;
    }


  }

}
