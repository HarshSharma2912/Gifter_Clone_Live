import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/constant';
import { DataTransferService } from '../service/data-transfer.service';
import { ModalService } from '../modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss', '../app.component.scss'],
  providers: [ModalComponent],
})
export class TopHeaderComponent implements OnInit,AfterViewInit {
  showModal = false;
  showSubModal = false;
  category = false;
  occasions = false;
  closeSide = false;
  greenLine:any = -1;
  showDiv: any = -1;
  showCommonModal : boolean = false;
 
  placeholder  = '   Enter the Country ddName'; 
  keyword = 'title';
  Data:any;
  drawerArr:any = [
    'HOME','CATEGORIES','DISCOUNT','OFFERS','OCCASIONS','CORPORATE GIFTING','WRITE & EARN','CHECK VOUCHER STATUS',"FAQ'S",'CONTACT US'
 ]

  constructor(private router: Router,private dataService : DataTransferService,private renderer: Renderer2,){
     
  }

  ngAfterViewInit() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.toggleButton && this.menu) {
        if (e.target !== this.toggleButton.nativeElement && e.target !== this.menu.nativeElement) {
          // Clicked outside the toggle button and menu, handle your logic here
          this.searchList = false;
        }
      }
    });
  } 

  ngOnInit(): void {
    this.Data = Data;
     for(let i=0; i<Data[0].images.length;i++){
      this.animals.push(Data[0].images[i].title) 
     }
    console.log("Data is ->", this.animals);

    setInterval(() => {
      this.fillAndTrimArray();
    }, 1000);
 }

  toggleSidenav(closeNav : boolean) {
    this.showSubModal=false;
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
    console.log("item is ->",item);
    
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
    this.router.navigate(['/category']);
  }

  
 

 
  ModalShow(){ 
    this.ModalNumber=1;
    this.dataService.ModalNumber = this.ModalNumber;
     this.dataService.openModal(true);
   }

   ModalNumber:any;

   searchClass: any = -1;
   count: any = 0;
   fillingArr: any = [',category', ', product']
   myArray: any = [];
   dynamicPlaceholder: any = "Search brand";
 
 
   fillAndTrimArray() {
 
     this.myArray.push(this.fillingArr[this.count]);
    //  console.log(this.myArray[this.count]);
 
    //  Trim the array to keep only two elements
     if (this.myArray.length <= 2) {
       this.dynamicPlaceholder += this.myArray[this.count];
       this.count++;
     } else {
       this.myArray = [];
       this.count = 0;
       this.dynamicPlaceholder = 'Search brand'
     }

    //  console.log(this.dynamicPlaceholder)
   }
 

  searchList:boolean = false;
 animals: string[] = [];  
  searchTerm: string = '';

  filterAnimals(): void {
    const searchTermLowerCase = this.searchTerm.toLowerCase();

    for(let i = 0;i<this.animals.length; i++){
      const animalLowerCase = this.animals[i].toLowerCase();
      const isVisible = animalLowerCase.includes(searchTermLowerCase);
      const element = document.getElementById(`${i}`);
      if (element) {
        element.style.display = isVisible ? 'list-item' : 'none';
      }
    }
 
  }
  searchEnter:any;

  listItemIndex(index:any){
    this.router.navigate(['/description'])
     this.dataService.setChildIndex(index);
     this.dataService.setIndex(0);
      this.searchList=false
      console.log("index is -l",index);
  }
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('menu')
  menu!: ElementRef;
  
 

  navigateTo(sideNavDir:any ){
     
    if(sideNavDir == 'HOME'){
      this.router.navigate(['/home']); 
  
    }
    else if (sideNavDir == 'DISCOUNT'){
      this.dataService.setIndex( 9);
       this.router.navigate(['/category']);
    }
    else if (sideNavDir == 'OFFERS'){
      this.dataService.setIndex(10);
       this.router.navigate(['/category']);
    }


    this.toggleSidenav(false);
    this.toggleSidenSubNab(1)

  }
}
