import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQsComponent implements OnInit {
  showContent: boolean = true;
  currentBox: any;
  isShow: any = 'topQueries';

  ngOnInit(): void {

  }
  toggleContent(value: any) {
    let prev = this.currentBox;
    this.currentBox = value;



    // console.log("first->", prev, "second ->", this.currentBox);
    if (prev == this.currentBox) {
      this.showContent = !this.showContent;
    } else {
      this.showContent = true;
    }
  }

  ChangeBrand(value: any) {
    this.isShow = value;
    this.showContent = false;
  }
}
