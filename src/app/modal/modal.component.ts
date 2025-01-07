import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
 import { DataTransferService } from '../service/data-transfer.service';
 import { ToastrService } from 'ngx-toastr';
 declare const bootstrap: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  [x: string]: any;
  showw:any;


  openModal() {
     const modal = document.getElementById('exaCenter');

     const modalInstance = new bootstrap.Modal(modal, {
     });

 
    modalInstance.show();
  }


  @ViewChild('lgModal') lgModal: any; // Add this line to get a reference to the modal

  constructor(private toastr: ToastrService,private router: Router, private dataService : DataTransferService,private renderer: Renderer2){}
  ngOnInit(): void {
    this.ModalNumber = this.dataService.ModalNumber; 

    if(this.ModalNumber == 2){
      this.static = 'static';
    }else{
      this.static = 'run';
    }

    console.log('this modalnumber is -<',this.ModalNumber);
    const myModal = new bootstrap.Modal(document.getElementById('exaCenter'));
    myModal._element.addEventListener('hidden.bs.modal', () => {
      this.onModalClosedByClickOutside();
    });

    this.captchaX = Math.floor((Math.random() * 100) );
    this.captchaY = Math.floor((Math.random() * 10) )
    this.status = this.captchaX + this.captchaY;

    setTimeout(() => {
       this.openModal()
   
      console.log("satus is ",this.showw)
    }, 100);
 
 
  }
  onModalClosedByClickOutside() {
    // Handle modal closed logic here
    this.dataService.openModal(false);
    console.log('Modal closed');
  }

  closeModal(){
    // this.lgModal.hide()
    this.dataService.openModal(false);
  }

  navigateTo(value : any){
    this.router.navigate([value]);
  }

   
 
showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!');
}
onModalClose() {
    // Logic to execute when the modal is closed
    console.log('Modal closed!');
    // Call any other functions or perform actions as needed
}

  validateMobileNumber(mobileNumber :any) {
  // Regular expression to match only digits
  var numberPattern = /^[0-9]+$/;

  // Check if the input contains only digits and does not exceed 10 digits
  return numberPattern.test(mobileNumber) && mobileNumber.length == 10;
}

// Example usage:
  mobileNumber:any ='';
  modalContent:any =-1;
  Name:string='';
  Email:any;
  otp:any;
  checkValidNumber(){  
    if (this.validateMobileNumber(this.mobileNumber)) {
      this.toastr.success('Otp sent!' );
      this.modalContent = 1;
    } else {
      this.toastr.error('Invalid mobile number'  );
      this.modalContent = -1;
    }
  }

  checkLength(){
    console.log("this.mobileNumber.length" )
    if (this.mobileNumber.length > 10) {
       this.mobileNumber.value = this.mobileNumber.slice(0, 10);
    }
  }

    isValidEmail(email:any) {
    // Regular expression for validating an Email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

  validateData(){
    if(this.Name.length==0){
      this.toastr.error('Please Enter Valid Name');
    }
    else if(!this.isValidEmail(this.Email)){
        this.toastr.error('Please Enter Valid Email');
    }
    else{
      this.toastr.error('Please Enter Valid OTP');
    }
  }

  ModalNumber:any;
  captchaX!:number;
  captchaY!:number;
  status:any;
  InputCaptcha:any;
  captchaStatus:boolean = true;
  voucherCode:any='';
  static:any;

  checkValue(){
    this.captchaStatus = this.status == parseInt(this.InputCaptcha) ? false:true;
    console.log(this.InputCaptcha)
  }
  changeCaptcha(){
    this.captchaX = Math.floor((Math.random() * 100) );
    this.captchaY = Math.floor((Math.random() * 10) );
    this.status = this.captchaX + this.captchaY; 
    this.checkValue();
  }

  ValidateVoucher(){
    if(this.voucherCode.length == 0){
      this.toastr.error('Please Enter Voucher Code');
    }
    else if(this.captchaStatus){
      this.toastr.error('Please Enter Valid Captcha'); 
    }
    else{
      this.toastr.error('Please Enter Valid Voucher Code');  
    }
  }
}
