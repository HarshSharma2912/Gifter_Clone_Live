import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-commonchild',
  templateUrl: './commonchild.component.html',
  styleUrls: ['./commonchild.component.scss']
})
export class CommonchildComponent implements OnInit{

  imgIndex!: number;
  navIndex!: number 
constructor(private router: Router, private dataService: DataTransferService){}
ngOnInit(): void {
  this.imgIndex = this.dataService.imgIndex();
 
}

  Data:any = [{

    "Banner":"https://cdn.gyftr.com/gyftrweb/categories/dinning_desktop1677600422.png",
    "Heading":"Dining",
    "images" :[
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_domino%27s-pizza-online1677604086.png&w=384&q=75',
        'title':"DOMINO'S PIZZA ONLINE",
        'saving':"8%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_pizza-hut1677647510.png&w=384&q=75',
        'title':"PIZZA HUT",
        'saving':"2%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_beer-cafe1677601858.png&w=384&q=75',
        'title':"BEER CAFE",
        'saving':"12%",
        
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo_swiggy-money-voucher16776050051693206142.webp&w=384&q=75',
        'title':"SWIGGY FOOD DISCOUNT VOUCHER",
        'saving':"6%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1692858344.png&w=384&q=75',
        'title':"SWIGGY ONE LITE MEMBERSHIP",
        'saving':" 15%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_gyftr-logo-(1)1689169620.png&w=384&q=75',
        'title':"AMALA EARTH",
        'saving':" 21%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo_chicago-pizza16776034571688624815.webp&w=384&q=75',
        'title':"CHICAGO PIZZA",
        'saving':"10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_zomato-gift-card1677605515.png&w=384&q=75',
        'title':"ZOMATO GIFT CARD",
        'saving':"8%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_auric1677601691.png&w=384&q=75',
        'title':"AURIC",
        'saving':"35%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_vaango1677605278.png&w=384&q=75',
        'title':"VAANGO",
        'saving':"",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_teamonk1677605041.png&w=384&q=75',
        'title':"WOW!CHINA",
        'saving':"2%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_wow!china1677605465.png&w=384&q=75',
        'title':"WOW!MOMO",
        'saving':"10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_wow!momo1677605480.png&w=384&q=75',
        'title':"CAFE DELHI HEIGHTS",
        'saving':"8%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_cdh1677665028.png&w=384&q=75',
        'title':"BARBEQUE NATION",
        'saving':"7%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_barbeque-nation1677601807.png&w=384&q=75',
        'title':"SWIGGY MONEY VOUCHER",
        'saving':"2%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_swiggy-money-voucher1677605005.png&w=384&q=75',
        'title':"CAFE COFFEE DAY ONLINE",
        'saving':"12%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_cafe-coffee-day1677602360.png&w=384&q=75',
        'title':"CHAAYOS",
        'saving':"12%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_chaayos1677603404.png&w=384&q=75',
        'title':"SWEET BENGAL",
        'saving':"10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_sweet-bengal1677647702.png&w=384&q=75',
        'title':"OH! CALCUTTA",
        'saving':"10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_oh!-calcutta1677647226.png&w=384&q=75',
        'title':"MACHAAN",
        'saving':"10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_machaan1677646996.png&w=384&q=75',
        'title':"SIGREE",
        'saving':"10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_sigree1677647662.png&w=384&q=75',
        'title':"MAINLAND CHINA",
        'saving':"10%",
      },
     
  
    ]
 
},

{

   

    "Banner":"https://cdn.gyftr.com/gyftrweb/categories/electronics1677600437.png",
    "Heading":"Electronic",
    "images" :[
      {  
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_amazon1677601689.png&w=256&q=75',
        'title':"AMAZON",
        'saving':"",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_flipkart1677605602.png&w=256&q=75',
        'title':"FLIPKART",
        'saving':"Savings 2.5%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_croma1677604016.png&w=256&q=75',
        'title':"CROMA",
        'saving':"Savings 1%",
        
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_william-penn1677648133.png&w=256&q=75',
        'title':"WILLIAM PENN",
        'saving':"Savings 6%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_skullcandy1677604668.png&w=256&q=75',
        'title':"SKULLCANDY",
        'saving':"Savings 12%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_blaupunkt1677601866.png&w=256&q=75',
        'title':"BLAUPUNKT",
        'saving':"Savings 7%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-my-jio-store1677604449.png&w=256&q=75',
        'title':"RELIANCE MY JIO STORE",
        'saving':"Savings 10%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-digital1677604408.png&w=256&q=75',
        'title':"RELIANCE DIGITAL",
        'saving':"Savings 1%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_hammer1677603478.png&w=256&q=75',
        'title':"HAMMER",
        'saving':"Savings 26%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_avast1677601766.png&w=256&q=75',
        'title':"AWAST",
        'saving':"Savings 14%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_just-corseca1677603710.png&w=256&q=75',
        'title':"CORSECA",
        'saving':"Savings 27%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_dailyobjects1677602773.png&w=256&q=75',
        'title':"DAILY OBJECTS",
        'saving':"Savings 22%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_hyperice1677603647.png&w=256&q=75',
        'title':"HYPERICE",
        'saving':"Savings 5%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_amazon-shopping-voucher1677601618.png&w=256&q=75',
        'title':"AMAZON SHOPPING VOUCHER",
        'saving':" 7%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_airtel-xstream1677601535.png&w=256&q=75',
        'title':"AIRTEL XSTREAM",
        'saving':"Savings 16%",
      },
      {
        'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo_unlimited16776051711679986068.webp&w=256&q=75',
        'title':"UNLIMITED",
        'saving':"Savings 6%",
      },


   
    ]
  },

  {
      "Banner":"https://cdn.gyftr.com/gyftrweb/categories/fashion1677600451.png",
      "Heading":"Fashion",
      "images" : [
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_bata1677601834.png&w=256&q=75',
          'title':"BATA",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_amazon1677601689.png&w=256&q=75',
          'title':"AMAZON",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_aldo-major-brands1677601659.png&w=256&q=75',
          'title':"ALDO-MAJOR BRANDS",
          'saving':"Savings 2%",
        },{
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_jockey1677646388.png&w=256&q=75',
          'title':"JOCKEY",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_myntra1677647199.png&w=256&q=75',
          'title':"MYNTRA",
          'saving':"Savings 4%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_pantaloons1677647289.png&w=256&q=75',
          'title':"PANTALOONS",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_benetton1677601903.png&w=256&q=75',
          'title':" BENTTON",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_jack-%26-jones1677646364.png&w=256&q=75',
          'title':"JACK & JONES",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_vero_moda1677648030.png&w=256&q=75',
          'title':"VEROMODA",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_only1677647270.png&w=256&q=75',
          'title':"ONLY",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_hidesign1677605747.png&w=256&q=75',
          'title':"HIDESIGN",
          'saving':"Savings 13%",
        },
        {
          'img':' ',
          'title':" ",
          'saving':"Savings %",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_levis1677646848.png&w=256&q=75',
          'title':"LEVIS",
          'saving':"Savings 4%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_inglot--major-brands1677646328.png&w=256&q=75',
          'title':"INGLOT -MAJOR BRANDS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_charles-%26-keith1677603428.png&w=256&q=75',
          'title':"CHARLES & KEITH-MAJOR BRANDS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_beverly-hills-polo-club1677601928.png&w=256&q=75',
          'title':"BEVERLY HILLS POLO CLUB-MAJORB",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_la-senza1677646817.png&w=256&q=75',
          'title':"FASTRACK",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_westside1677648114.png&w=256&q=75',
          'title':"WESTSIDE",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_woodland1677648157.png&w=256&q=75',
          'title':"WOODLAND",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_call-it-spring1677602386.png&w=256&q=75',
          'title':"CALL IT SPRING-MAJOR BRANDS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_euphoria-jewellery-(tm)-gold-coins1677604131.png&w=256&q=75',
          'title':"EUPHORIA JEWELLERY (TM) GOLD CONIS",
          'saving':"Savings 3%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_gant1677603397.png&w=256&q=75',
          'title':"GANT",
          'saving':"Savings 12%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_hush-puppies1677646267.png&w=256&q=75',
          'title':"HUSH PUPPIES",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_lifestyle1677604107.png&w=256&q=75',
          'title':"LIFESTYLE",
          'saving':"Savings 5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_shoppers_stop1693914465.png&w=256&q=75',
          'title':"SHOPPERS STOP",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_tanishq1677647723.png&w=256&q=75',
          'title':"TANISHQ",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_helios1677605701.png&w=256&q=75',
          'title':"HELIOS",
          'saving':"Savings 2%",
        },
         {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_titan1687408048.png&w=256&q=75',
          'title':"TITAN EYE PLUS",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_relaxo1677647643.png&w=256&q=75',
          'title':"RELAXO",
          'saving':"Savings 6%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_celio1677603366.png&w=256&q=75',
          'title':"CELIO",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_kalyan-jewellers-gold-coins1677646484.png&w=256&q=75',
          'title':"KALYAN GOLD COINS",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_pc-jewellers-gold-coins1677647368.png&w=256&q=75',
          'title':"PC JEWELLER GOLD COIN",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_aurelia1677601781.png&w=256&q=75',
          'title':"AURELIA",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_w1677645676.png&w=256&q=75',
          'title':"W",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_kalyan-jewellers-gold-jewellery1677646544.png&w=256&q=75',
          'title':"KALYAN GOLD JEWELLERY",
          'saving':"Savings 0.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_kalyan-jewellers-diamond-jewellery1677646442.png&w=256&q=75',
          'title':"KALYAN DIAMOND JEWELLEYRY",
          'saving':"Savings 0.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_pc-jewellers-gold-jewellery1677647459.png&w=256&q=75',
          'title':"PC JEWELLER GOLD",
          'saving':"Savings 0.5%",
        },
         {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_pc-jewellers-diamond-jewellery1677647330.png&w=256&q=75',
          'title':"PC JEWELLER DIAMOND",
          'saving':"Savings 0.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_biba1677602233.png&w=256&q=75',
          'title':"BIBA",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_gini-%26-jony1677605626.png&w=256&q=75',
          'title':"GINI & JONY",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_puma1677647582.png&w=256&q=75',
          'title':"PUMA",
          'saving':"Savings 12%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_luxe1677646973.png&w=256&q=75',
          'title':"LUXE GIFT CARD",
          'saving':"Savings 12%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_ketan-diamonds-diamond-jewellery1677646621.png&w=256&q=75',
          'title':"KETAN DIAMONDS DIAMOND JEWELLERY",
          'saving':"Savings 10.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_ketan-diamonds-gold-jewellery1677646674.png&w=256&q=75',
          'title':"KETAN DIAMONDS GOLD JEWELLERY",
          'saving':"Savings 7.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_fabindia1677603245.png&w=256&q=75',
          'title':"FABINDIA",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_ketan-diamond-gold-coin1677603732.png&w=256&q=75',
          'title':"KETAN DIAMONDS GOLD COIN",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_armani-exchange-luxe-gift-card1677601633.png&w=256&q=75',
          'title':"ARMANI EXCHANGE-LUXE GIFT CARD",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_coach1682922188.png&w=256&q=75',
          'title':"COACH-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_gas1677603410.png&w=256&q=75',
          'title':"GAS-LUXE GIFT CARD",
          'saving':"Savings %",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_hamleys1677603465.png&w=256&q=75',
          'title':"HAMLEYS-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_satya-paul1677604561.png&w=256&q=75',
          'title':"SATYA PAUL-LUXE GIFT CARD",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_mothercare1677604232.png&w=256&q=75',
          'title':"MOTHERCARE-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_superdry-luxe-gift-card1677604975.png&w=256&q=75',
          'title':"SUPERDRY-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_steve-madden-luxe-gift-card1677604956.png&w=256&q=75',
          'title':"STEVE MADDEN-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_candere-gold-coin1677602274.png&w=256&q=75',
          'title':"CANDERE GOLD COIN",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_candere-gold-jewellery1677602290.png&w=256&q=75',
          'title':"CANDERE GOLD JEWELLERY",
          'saving':"Savings 1%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_candere-diamond-jewellery1677602256.png&w=256&q=75',
          'title':"CANDERE DIAMOND JEWELLERY",
          'saving':"Savings 3%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_elleven1677602851.png&w=256&q=75',
          'title':"ELLEVEN",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_max1677604164.png&w=256&q=75',
          'title':"MAX",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_skechers1677604640.png&w=256&q=75',
          'title':"SKECHERS",
          'saving':"Savings 9.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_tata-cliq1677605029.png&w=256&q=75',
          'title':"TATA CLIQ",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_brooks-brothers--luxe-gift-card1677602178.png&w=256&q=75',
          'title':"BROOKS BROTHERS-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_g-star-raw1629368068.png&w=256&q=75',
          'title':"G-STAR-LUXE GIFT CARD",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_scotch-%26-soda1677604597.png&w=256&q=75',
          'title':"SCOTCH & SODA-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_replay--luxe-gift-card1677604542.png&w=256&q=75',
          'title':"REPLAY-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_dune1677602831.png&w=256&q=75',
          'title':"DUNE-LUXE GIFT CARD",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_bath-%26-body-works1677601820.png&w=256&q=75',
          'title':"BATH & BODY WORKS-MAJOR BRANDS",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_lifestyle-(online)1677604093.png&w=256&q=75',
          'title':"LIFESTYLE ONLINE",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_homecenter1689655826.png&w=256&q=75',
          'title':"HOME CENTER ONLINE",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_mia1677604218.png&w=256&q=75',
          'title':"MIA",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_skinn1677604654.png&w=256&q=75',
          'title':"SKINN",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_titan-minimals1677605083.png&w=256&q=75',
          'title':"TITAN MINIMALS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_fastrack-bags1677603260.png&w=256&q=75',
          'title':"FASTRACK BAGS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_chumbak1677602321.png&w=256&q=75',
          'title':"CHUMBAK",
          'saving':"Savings 12%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_bluestone-diamond1677601997.png&w=256&q=75',
          'title':"BLUESTONE DIAMOND",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_bluestone-gold1677602032.png&w=256&q=75',
          'title':"BLUESTONE GOLD",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_bluestone-gold1677602032.png&w=256&q=75',
          'title':"BLUESTONE GOLD JEWELLERY",
          'saving':"Savings 1%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_giva-logo1677603423.png&w=256&q=75',
          'title':"GIVA",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-trends-footwear1677604495.png&w=256&q=75',
          'title':"RELINACE TRENDS FOOTWEAR",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-trends1677604515.png&w=256&q=75',
          'title':"RELIANCE TRENDS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-smart-point1677604464.png&w=256&q=75',
          'title':"RELIANCE SMART POINT",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-smart1677604479.png&w=256&q=75',
          'title':"RELIANCE SMART",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_projecteve1677604391.png&w=256&q=75',
          'title':"RELIANCE PROJECT EVE",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_reliance-jewels1677604436.png&w=256&q=75',
          'title':"RELIANCE JEWELS",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_euphoria-jewellery-silver-coin1677603216.png&w=256&q=75',
          'title':"EUPHORIA JEWELLERY SILVER COIN",
          'saving':"Savings 3%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_wildcraft1677605438.png&w=256&q=75',
          'title':"WILDCRAFT",
          'saving':"Savings 6%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_beyoung1677601850.png&w=256&q=75',
          'title':"BEYOUNG",
          'saving':"Savings 22%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_beauty-scentiments1677601835.png&w=256&q=75',
          'title':"BEAUTY SCENTIMENTS",
          'saving':"Savings 17%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_balenzia1677601789.png&w=256&q=75',
          'title':"BALENZIA",
          'saving':"Savings %",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_truly-blessed1677605157.png&w=256&q=75',
          'title':"TRULY BLESSED",
          'saving':"Savings 32%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_arrow1677601649.png&w=256&q=75',
          'title':"ARROW",
          'saving':"Savings 12.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_amazon-shopping-voucher1677601618.png&w=256&q=75',
          'title':"AMAZON SHOPPOING VOUCHER",
          'saving':"Savings 2%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_freecultr1677603332.png&w=256&q=75',
          'title':"FREECULTR",
          'saving':"Savings 20%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_troll-beads1677605107.png&w=256&q=75',
          'title':"TROLL BEADS",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_v-mart1677605258.png&w=256&q=75',
          'title':"V MART",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_nykaa1677604298.png&w=256&q=75',
          'title':"NYKAA",
          'saving':"Savings 8%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_abc1682497833.jpeg&w=256&q=75',
          'title':"LOVE BEAUTY & PLANET",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_simple-logo-011677604626.png&w=256&q=75',
          'title':"SIMPLE",
          'saving':"Savings 11%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo_unlimited16776051711679986068.webp&w=256&q=75',
          'title':"UNLIMITED",
          'saving':"Savings 6%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_swiss-beauty1677605018.png&w=256&q=75',
          'title':"SWISS BEAUTY",
          'saving':"Savings 14%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_bewakoof1677665013.png&w=256&q=75',
          'title':"BEWAKOOF",
          'saving':"Savings 14%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_victoria-s1677654626.png&w=256&q=75',
          'title':"VICTORIA'S SECRET - MAJOR BRANDS",
          'saving':"Savings 12%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1679487757.png&w=256&q=75',
          'title':"MELORRA GOLD COIN",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1679488459.png&w=256&q=75',
          'title':"MELORRA GOLD JEWELLERY",
          'saving':"Savings 4%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1679488612.png&w=256&q=75',
          'title':"MELORRA DIAMOND JEWELLERY",
          'saving':"Savings 9%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1680607411.png&w=256&q=75',
          'title':"RENEE COSMETIC",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1681895085.png&w=256&q=75',
          'title':"SUPERBOTTOMS",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo_max-online16776041511685085701.webp&w=256&q=75',
          'title':"MAX FASHION ONLINE",
          'saving':"Savings 10%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_shiv-naresh1687424906.png&w=256&q=75',
          'title':"SHIV NARESH",
          'saving':"",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_tcp-logo1688121348.png&w=256&q=75',
          'title':"TATA CLIQ PALETTE",
          'saving':"Savings 7.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1687928319.png&w=256&q=75',
          'title':"TEGO",
          'saving':"Savings 16%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1689151306.png&w=256&q=75',
          'title':"NYKAA MAN",
          'saving':"Savings 7.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_logo1689151533.png&w=256&q=75',
          'title':"NYKAA FASHION",
          'saving':"Savings 7.5%",
        },
        {
          'img':'https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fgyftrweb%2Fbrands%2Flogo_gyftr-logo-(1)1689169620.png&w=256&q=75',
          'title':"AMALA EARTH",
          'saving':"Savings 21%",
        },
        
        
        
        
        
        

      ],
      
  },

  {
    "Banner":"https://cdn.gyftr.com/gyftrweb/categories/health&wellness1677600469.png",
    "Heading":"Wellness",
    "images" : [],
},

{
  "Banner":"https://cdn.gyftr.com/gyftrweb/categories/gifting1677600481.png",
  "Heading":"Giftin",
  "images" : [],
},

{
  "Banner":"https://cdn.gyftr.com/gyftrweb/categories/grocery1677600498.png",
  "Heading":"Home Needs",
  "images" : [],
},

{
  "Banner":"https://cdn.gyftr.com/gyftrweb/categories/e-comm_online1677600514.png",
  "Heading":"Home Needs",
  "images" : [],
},

{
  "Banner":"https://cdn.gyftr.com/gyftrweb/categories/grocery1677600498.png",
  "Heading":"E-Commerce",
  "images" : [],
},

{
  "Banner":"https://cdn.gyftr.com/gyftrweb/categories/entertainment1677600545.png",
  "Heading":"Entertainment",
  "images" : [],
},  

{
  "Banner":"https://cdn.gyftr.com/gyftrweb/categories/travel1677600566.png",
  "Heading":"Travel",
  "images" : [],
},  
]
}
