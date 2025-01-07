import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { Data } from 'src/assets/constant';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  Datapart: any;
  isGreen: any = 0;
  parentIndex: any = 0;
  childIndex: any = 0;
  modalBorder: any = 1;
  panelOpenState = false;
  @ViewChild('lgModal1') lgModal: any; // Add this line to get a reference to the modal

  topImage: any = [
    "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_pvr_d1695626438.gif&w=1920&q=75",
    "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_2023-09-05t10_33_001693912746.webp&w=1920&q=75",
    "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_2023-08-25t09_50_261693548324.webp&w=1920&q=75",
    "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fhome_2023-09-04t04_02_301693801594.webp&w=1920&q=75"
  ]

  loopCount: any = 10;
  @ViewChild('carousel') carousel!: CarouselComponent;
  @ViewChild('carousel1') carousel1!: CarouselComponent;
  @ViewChild('carousel2') carousel2!: CarouselComponent;

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

  constructor(private dataService: DataTransferService) { }

  open: boolean = true;
  dismissible: boolean = true;
  timeout: number = 10000;
 
  
 
  log(alert:any){
    //  console.log('alert message closed');
  }
  ngOnInit(): void {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.parentIndex = this.dataService.index;
    this.childIndex = this.dataService.childIndex;
 
    // console.log("child isndex is s s ",this.childIndex)
      this.Datapart = Data[this.parentIndex]; 

      this.dataService.HeaderObserveChildIndex.subscribe((res) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if(res !=undefined){ 
          this.childIndex = res; 
          localStorage.setItem('childIndex', this.childIndex.toString());
        }
      }) 
      this.dataService.testObserve.subscribe((res) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.parentIndex = res;
        this.Datapart = Data[this.parentIndex];
 
        if(this.parentIndex != undefined){ 
          localStorage.setItem('myIndex', this.parentIndex.toString());
        }
      })
    
 

    if (localStorage.getItem('childIndex')) {
      this.childIndex = localStorage.getItem('childIndex');
    }
    if (localStorage.getItem('myIndex')) {
      this.parentIndex = localStorage.getItem('myIndex');
      this.Datapart = Data[this.parentIndex];

    }
    // console.log("child isndex is s s ",this.childIndex)


  }

  onPreviousClick(value: any): void {
    if (value == 0) {
      this.carousel.prev();

    }
    else if (value == 1) {
      this.carousel1.prev();
    }
    else {
      this.carousel2.prev();

    }
  }

  // Function to navigate to the next item
  onNextClick(value: any): void {
    if (value == 0) {
      this.carousel.next();
    }
    else if (value == 1) {
      this.carousel1.next();
    }
    else {
      this.carousel2.next();

    }
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
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },

  }

  customOptionsBottom: OwlOptions = {
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
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },

  }

  Discount: any = [

    {
      'rupee': '250',
      'discount': '5',
      'earn': '5',
      'saving': '10',
      'youpay': '245'

    },
    {
      'rupee': '1000',
      'discount': '20',
      'earn': '20',
      'saving': '40',
      'youpay': '980'

    },
    {
      'rupee': '2000',
      'discount': '40',
      'earn': '40',
      'saving': '80',
      'youpay': '1960'

    },
    {
      'rupee': '5000',
      'discount': '100',
      'earn': '98',
      'saving': '198',
      'youpay': '4900'

    },

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
    {
      img: "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbanners%2Fside_2023-08-08t08_32_481691508773.png&w=256&q=75",
      heading: "Baja Finserv Offer",
      text: "25% OFF on SonyLiv & 200+ brands",
    },

  ]

  ModalShow() {
    this.dataService.ModalNumber = 1; 
    this.dataService.openModal(true);
  }

  navToSelf(index:any) {
    this.childIndex = index;
    localStorage.setItem('childIndex', this.childIndex.toString()); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  closeModal() {
    this.lgModal.hide()
    this.dataService.openModal(false);
  }
  showModal() {
    this.lgModal.show();
  }


  isChecked: boolean = false;
  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;

  }
}
