import { Injectable } from '@angular/core';
// import { SheetComponent } from '../category/sheet/sheet.component';
import { BehaviorSubject,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  [x: string]: any;


  ModalNumber:any;
  footerHeadin!:any;
  index!:number;
  modalCommon!:any;
  childIndex!:any;
  testObserve= new BehaviorSubject(this.index);
  footHead= new BehaviorSubject(this.footerHeadin);
  modalObserve = new BehaviorSubject(this.modalCommon);
  HeaderObserveChildIndex = new BehaviorSubject(this.childIndex);

   
  
  openModal(value:boolean){
    this.modalObserve.next(value);
    console.log("value is for modal ->",value);
  }
 
 setIndex(index :number){
   this.testObserve.next(index); 
  }

  setChildIndex(index:any){
    this.HeaderObserveChildIndex.next(index);
  }


 imgIndex(){
  return this.index;
 }

 dataIndex(){
  return this.index;
 }
 
 callModal(){
  console.log("Heading is in service ->",this.footerHeadin)
 }

footerHeading(value :any){
  this.footHead.next(value);

}


 

 
}
