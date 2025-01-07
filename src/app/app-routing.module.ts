import { Component, NgModule } from '@angular/core';
import {   RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
// import { CategoryComponent } from './category/category.component';
// import { DiningComponent } from './category/dining/dining.component';
// import { ECommerceComponent } from './category/e-commerce/e-commerce.component';
// import { ElectonicsComponent } from './category/electonics/electonics.component';
// import { FashionComponent } from './category/fashion/fashion.component';
// import { WellnessComponent } from './category/wellness/wellness.component';
// import { GiftingComponent } from './category/gifting/gifting.component';
// import { HomeNeedsComponent } from './category/home-needs/home-needs.component';
// import { TravelComponent } from './category/travel/travel.component';
// import { ChildDiningComponent } from './category/dining/child-dining/child-dining.component';
import { CommonComponent } from './common/common.component';
import { CommonchildComponent } from './commonchild/commonchild.component';
import { AboutUsComponent } from './about-parent/about-us.component';
import { FAQsComponent } from './about-parent/faqs/faqs.component';
import { TermsComponent } from './about-parent/terms/terms.component';
import { PrivacyPolicyComponent } from './about-parent/privacy-policy/privacy-policy.component';
import { AboutComponent } from './about-parent/about/about.component';
import { DescriptionComponent } from './description/description.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDiscComponent } from './blog/blog-disc/blog-disc.component';
import { ContentComponent } from './blog/content/content.component';

const routes: Routes = [
  // {path:'', redirectTo:'home' , pathMatch: 'full'},
  //  {path:'category', children:[
  //   {path:'', component: CategoryComponent},
  //   {path:'del1', component:Del1Component},
  //   {path:'del2', component:Del2Component},
  //   {path:'del3', component:Del3Component}
  // ]},
  {path:'', component:HomeComponent},
  {path:'category', component:CommonComponent},
  {path:'home',component:HomeComponent},
  {path:'commonchild', component:CommonchildComponent},
  {path:'footer',component: AboutUsComponent, children:[
      {path:'', component:FAQsComponent},
      {path: 'faqs', component: FAQsComponent},
      {path : 'AboutUs',component: AboutComponent},
      {path:'terms', component:TermsComponent},
      {path : 'privacyPolicy',component:PrivacyPolicyComponent},

 
    ]},
    {path:'blog',component: BlogComponent, children:[
      {path:'', component:ContentComponent},
      {path: 'blogDisc', component: BlogDiscComponent},
      {path : 'content',component: ContentComponent},
   
    ]},
  {path : 'description' , component:DescriptionComponent},
  {path:'loyalty' , component:LoyaltyComponent}
  
  // {path:'',  component: CategoryComponent ,children:[
    
  //   // {path:'Dining', component:DiningComponent},
  //   {path:'ecomerce', component:ECommerceComponent},
  //   {path:'Electronics', component:ElectonicsComponent},
  //   {path:'Fashion', component:FashionComponent},
  //   {path: 'Wellness', component: WellnessComponent},
  //   {path: 'Gifting', component:GiftingComponent},
  //   {path: 'HomeNeeds', component:HomeNeedsComponent},
  //   {path: 'ECommerce', component:ECommerceComponent},
  //   {path: 'Travel', component:TravelComponent},
   

  // ]},
  // {path:'** component:pageNotFound'},
  // {path:'childDining', component:ChildDiningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
