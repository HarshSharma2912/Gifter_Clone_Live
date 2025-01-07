import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

import { DataTransferService } from '../service/data-transfer.service';
import { Router } from '@angular/router';
import { Data } from 'src/assets/constant';


@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {

  Data: any;
  index!: number;
  options: string[] = ["Dominos's Pizza Online", "Pizza Hut", "Beer Cafe", "Sweegy Food Discount voucher", "Swiggy One Lite Membership", 'Amala Earth', 'Chiago Pizza', 'omato Gift Card', 'Auric', 'Vaango', 'Teamonk', 'Wow!China', 'Wow! Momo', 'Cafe Delhi Heights', 'Barbeque Nation', 'Swiggy Money Voucher', 'Cafe Cofee Day Online'];
  Categories: any;
  isCheck: any;
  hoverCheck: any;
  isMobile: boolean = false;

  constructor(private renderer: Renderer2, private dataService: DataTransferService, private router: Router) {
     
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.toggleButton && this.menu) {
        if (e.target !== this.toggleButton.nativeElement && e.target !== this.menu.nativeElement) {
          // Clicked outside the toggle button and menu, handle your logic here
          this.searchList = false;
        }
      }
    });
  }

  ngAfterViewInit() {

  } 
  passChildIndex(index: any) {

  }

  @Input() dataa: any;

  ngOnInit() {


    this.checkScreenSize();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });

    this.dataService.testObserve.subscribe((res) => {
      this.index = res;
      this.isCheck = res;
      if (this.index != undefined) {
        localStorage.setItem('myIndex', this.index.toString());
        this.filterImg = Data[this.index].images;
        this.Data = Data[this.index];
        this.Categories = Data;
      }
      this.animals = [];
      if (this.index) {
        for (let i = 0; i < Data[this.index].images.length; i++) {
          this.animals.push(Data[this.index].images[i].title)
        }
      }
    })

    const storedIndex = localStorage.getItem('myIndex');
    if (storedIndex) {
      this.index = parseInt(storedIndex);
      // console.log("my getting index from localstorage , ", storedIndex);
      this.Data = Data[this.index];
      this.filterImg = Data[this.index].images;
      this.Categories = Data;
      this.isCheck = storedIndex;
    }

    for (let i = 0; i < Data[this.index].images.length; i++) {
      this.animals.push(Data[this.index].images[i].title)
    }

  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 992;
  }

  filterImg: any = [];
  isdiscount: any = 0;
  status: any = 0;


  filterDiscount(lower: any, higher: any) {

    length = Data[this.index].images.length;
    this.isdiscount = higher

    if (this.status != higher) {
      this.filterImg = []
      for (let idx = 0; idx < length; idx++) {

        const stringArray = Data[this.index].images[idx].saving.split(/[ %]/);

        if (stringArray[1] >= parseInt(lower) && stringArray[1] <= parseInt(higher) && stringArray[1] != "") {
          this.filterImg.push(this.Data.images[idx]);

        }
        if (lower == -1 && idx < 4) {
          this.filterImg.push(Data[this.index].images[idx]);
        }
        this.status = higher;
      }
    }
    else {
      this.filterImg = Data[this.index].images;
      this.isdiscount = 0;
      this.status = 0;
    }

  }

  reset() {
    this.filterImg = Data[this.index].images;
    this.isdiscount = 0
  }

  changeCategory(idx: any) {
    // this.filterDiscount(this.lower, this.higher);
    localStorage.setItem('myIndex', idx.toString());
    // console.log("Index is ->", this.index, "idx ->", idx);
    this.index = idx;
    this.filterImg = Data[idx].images;
    this.Data = Data[idx];
    this.isCheck = idx;
    // console.log(this.isCheck)
  }

  passIndexToDes(childIndex: any) {
    this.dataService.setChildIndex(childIndex)
    this.router.navigate(['/description']);
  }


  //Search bar

  filterAnimals(): void {
    const searchTermLowerCase = this.searchTerm.toLowerCase();

    for (let i = 0; i < this.animals.length; i++) {
      const animalLowerCase = this.animals[i].toLowerCase();
      const isVisible = animalLowerCase.includes(searchTermLowerCase);
      const element = document.getElementById(`${i}`);
      if (element) {
        element.style.display = isVisible ? 'list-item' : 'none';
      }
    }

  }
  searchList: boolean = false;
  animals: string[] = [];
  searchTerm: string = '';
  searchEnter: any;

  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('menu')
  menu!: ElementRef;

  listItemIndex(index: any) {
    this.dataService.setChildIndex(index);
    this.searchList = false
    this.dataService.setChildIndex(index);
    this.dataService.setIndex(this.index);
    this.router.navigate(['/description'])
  }
  toggleMenu() {
    this.searchList = !this.searchList;
  }
}


