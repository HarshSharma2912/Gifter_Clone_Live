import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { Data } from 'src/assets/constant';
import { Observable, map, startWith } from 'rxjs';
import { DataTransferService } from '../service/data-transfer.service';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  imageDevide: any;
  showBottom = false;
  panelOpenState = false;
  greenLine: any = -1;
  sharingIndex: any;
  showDiv: any = -1;

  isdiscount: any = -1;
  lowerDiscount: any;
  higherDiscount: any;
  filterImg: any = [];
  Data: any;

  constructor(private router: Router, private modalService: BsModalService, private dataService: DataTransferService, private modal: ModalService) { }


  topImage: any = [
    {
      desk: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_pvr_d1695626438.gif&w=1920&q=75",
      mob: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_pvr_m1695626438.gif&w=640&q=75",
    },
    {
      desk: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_ustraa_d1694680725.webp&w=1920&q=75",
      mob: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_ustraa_m1694680726.webp&w=1200&q=75",
    },
    {
      desk: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_tata-cliq-d1695360991.webp&w=3840&q=75",
      mob: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_tata-cliq-m1695360989.webp&w=1200&q=75",
    },
    {
      desk: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_star-bazaar_d1694592859.webp&w=3840&q=75",
      mob: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_star-bazaar_m1694592857.webp&w=1200&q=75",
    },




  ]

  slides = [
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/1.webp',
      alt: 'Table Full of Spices',
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/2.webp',
      alt: 'Winter Landscape',
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/3.webp',
      alt: 'View of the City in the Mountains',
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/4.webp',
      alt: 'Place Royale Bruxelles',
    },
  ];

  MoreAbout: any = [
    {
      'Heading': 'Are you looking for online Gift Cards? If so, GyFTR is the place for you. Discover online Gift Vouchers of more than 200 brands in a single place with some amazing deals and discounts. Whether you are seeking discounted Gift Cards codes for your loved ones or corporate Gift Vouchers for clients, you will find it all here. No hassles! No convenience fee! No logistics issue. Buying and redeeming these vouchers is a breeze.',
      'MoreAboutGifter': [
        {
          'heading': 'What are Gift Cards?',
          'text': 'Gift Cards are prepaid Cards of brands with a certain value. You can buy products or services from that brand to redeem the existing value of the Cards. For example, if you have a Pizza Hut voucher of Rs. 1000, you can use it to order a meal of up to Rs. 1000 from one of its outlets.',
        },
        {
          'heading': 'Why Choose GyFTR to Buy Gift Cards?',
          'text': 'The Gift vouchers online from GyFTR come with many advantages. The primary benefit is that you can get loads of discounts on different brands listed in its catalog. In fact, the discounted Gift Vouchers are available with up to 40% OFF. And, you can use debit or credit cards from any bank. There are also other online payment options, including UPI and net banking.<br><br>With GyFTR, you can send digital Gift vouchers to your loved ones directly. Just enter their contact details (email/phone number), and they will receive the Gift voucher within a few minutes.<br><br>The e-gift Cards from GyFTR also come with other exciting offers. When you purchase a voucher, you can get offers, such as free subscriptions to streaming services, online fitness sessions, or discounts on other brands. These offers vary by the brand you have chosen. We keep on updating these offers, which is why you should check our Offers page regularly.',
        },
        {
          'heading': 'Different Gift Cards Categories on GyFTR',
          'text': `To help you discover the right voucher easily, we have segmented the brand vouchers under various categories. You will find online Gift Vouchers under categories like: <br><br>
           <ul>
           <li> Food & Beverage</li>
           <li> Apparel & Accessories </li>
           <li> Mobile & Electronics </li>
           <li> Health & Wellness </li>
           <li> Grocery & Home Needs</li>
           <li> e-Com & Online</li>
           <li> Entertainment & Magazines</li>
           <li> Cabs & Travel </li>
           </ul>
           Each category encompasses numerous vouchers from top brands.`,

        },
        {
          'heading': 'Restaurant vouchers from GyFTR',
          'text': `If you are specifically looking for restaurant vouchers, you will find plenty of options from this portal. For fast-food chain lovers, we have Domino's vouchers, Pizza Hut vouchers, KFC vouchers, Chicago Pizza, etc. Go for Oh! Calcutta, Machaan, Mainland China, or Sweet Bengal if you prefer regional food or a theme-based experience. Choose food vouchers from Zomato Pro or Swiggy if you prefer online ordering. Restaurant vouchers for Chaayos and CCD are chosen by fans of hot beverages. Exotic Beers, delectable food, and a relaxing atmosphere are what you can get by using The Beer Cafe Vouchers.`,
        },
        {
          'heading': `Buy Gift Cards for Different Brands. `,
          'text': `GyFTR houses Gift vouchers for more than 150 brands. The list keeps on growing with the addition of new brands regularly.  `,
        },
        {
          'heading': `Corporate Gift Cards from GyFTR`,
          'text': `GyFTR is a trailblazer when it comes to corporate Gift Cards. This Gift Cards portal caters to several Gifting occasions, such as Employee rewards & recognition, client acquisition, client relationship management, sales incentives, customer promotions, channel partner Gifting, festive Gifting, and other forms of Corporate Gifting.`,
        },
        {
          'heading': `Gift Vouchers for different occasions`,
          'text': `Almost every festival and occasion is incomplete without a good Gift. But, no one likes receiving those repetitive, generic Gifts. Be the one who Gifts something useful with Gift vouchers online. You don’t need to visit different portals to find New Year, Diwali Gift Cards, Weddings, and Christmas. The brand vouchers on GyFTR work perfectly for all these and numerous other occasions. Through a personalized message with these Gifts, you can express your feelings more easily.`,
        },
        {
          'heading': `How to Buy Gift Cards?`,
          'text': `The process of buying Gift Cards from GyFTR is extremely simple.<br>
           <ol>
              <li>Register yourself on this portal using your phone number and email address. If already registered, sign up using your credentials.
              </li>
              <li>Visit the brand page by selecting the name of the brand present under one of the categories.
              </li>
              <li>Select the quantity and value of the voucher present on the respective brand page.
              </li>
              <li>Click on the “Checkout” button. If you wish to buy more vouchers, then click on the “Add To Cart” button and visit other brand pages to purchase their respective vouchers.
              </li>
              <li>Visit the Cart and make the payment using GyFTR Pay or other payment methods.
              </li>
            </ol> 
            You will receive your voucher within a few minutes through email and/or SMS. 
           `,
        },

        {
          'heading': `How to redeem Gift Cards?`,
          'text': `You can redeem Gift cards online or offline, depending on the brand. To redeem a Gift Cards online:
           <br><br>
           <ol>
           <li>Visit the official website of the brand. </li>
           <li>Add products you want to buy to the cart. </li>
           <li>Visit the Cards or payment option and enter the voucher code. </li>
           </ol>
           The value of the voucher will be instantly deducted from the bill.
           <br><br>To redeem the voucher offline:
            <br><br>
            <ol>
            <li>Use the “Outlet Locator” option on the brand page to find the eligible outlet near you.</li>
            <li>Visit that outlet and select the products you want to buy.</li>
            <li>When making a payment, show your voucher code to the cashier. He/she will deduct the voucher value from your total amount instantly.</li>
            
            </ol>

           `,
        },

      ]
    }
  ]


  offerImg: any = [
    {
      img: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_2023-08-08t08_32_481691508773.png&w=256&q=75",
      heading: "Baja Finserv Offer",
      text: "25% OFF on SonyLiv & 200+ brands",
    },
    {
      img: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_sbi_yono1677605521.png&w=256&q=75",
      heading: "SBI YONO Card Offer",
      text: "Earn 2% E Coins on Amazone",
    },
    {
      img: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_irctc1677604941.png&w=384&q=75",
      heading: "IRCTC Offer",
      text: "30% OFF on Bata & 200 more brands",
    },
    {
      img: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_irctc1677604941.png&w=384&q=75",
      heading: "IRCTC Offer",
      text: "30% OFF on Bata & 200 more brands",
    },


  ]


  ngOnInit(): void {

    this.Data = Data;
    window.scrollTo({ top: 0, behavior: 'smooth' });

   

    for (let idx = 0; idx < this.Data[2].images.length; idx++) {
      if (idx < 5) {
        this.filterImg.push(this.Data[2].images[idx]);
      }
    }

  }


  passCurrentIndex(index: any) {
    this.showDiv = -1;
    this.sharingIndex = index;
    console.log("index is in home ", this.sharingIndex);
    this.dataService.setIndex(index);
    this.router.navigate(['/category']);

  }
  passChildIndex(index: any) {

  }

  filterDiscount(lower: any, higher: any) {
    console.log("lower ->", lower, 'higher ->', higher);
    length = this.Data[2].images.length;
    this.filterImg = [];
    this.isdiscount = lower

    for (let idx = 0; idx < length; idx++) {
      const stringArray = this.Data[2].images[idx].saving.split(/[ %]/);

      if (stringArray[1] >= parseInt(lower) && stringArray[1] <= parseInt(higher) && this.filterImg.length < 5 && stringArray[1] != "") {
        this.filterImg.push(this.Data[2].images[idx]);
        console.log("Number is ->", stringArray)
      }
      if (lower == -1 && idx < 4) {
        this.filterImg.push(this.Data[2].images[idx]);

      }
    }

  }





  onInputChange(event: any) {
    const inputValue = event.target.value;
    // Do something with the inputValue, such as logging it or updating a component property
    console.log('Input value changed:', typeof inputValue);
    for (let index = 0; index < this.Data.length; index++) {
      for (let innerIndex = 0; innerIndex < this.Data[index].images.length; innerIndex++) {
        if (inputValue == this.Data[index].image[innerIndex].title) {
          console.log("found");
        }
      }
    }
  }











  @ViewChild('carousel') carousel!: CarouselComponent;
  onPreviousClick(): void {
    this.carousel.prev();
  }

  onNextClick(): void {
    this.carousel.next();
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 3
      },
      650: {
        items: 4
      },
      940: {
        items: 4
      }
    },

  }
  passIndexToDes(childIndex: any) { 
    this.dataService.setIndex(0);
    this.dataService.setChildIndex(childIndex);
    this.router.navigate(['/description']);
  }



  navigateTo() {
    this.dataService.setIndex(2);
    this.router.navigate(['/category']);
  }

}
