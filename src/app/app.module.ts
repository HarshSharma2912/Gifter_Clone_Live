import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 import { SidebarModule } from 'primeng/sidebar';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { Del1Component } from './products/del1/del1.component';
import { Del2Component } from './products/del2/del2.component';
import { Del3Component } from './products/del3/del3.component';
import { Del4Component } from './products/del4/del4.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {   MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogModule } from 'primeng/dialog';
 import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
 import { FormsModule } from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
 import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { CommonComponent } from './common/common.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonchildComponent } from './commonchild/commonchild.component';
 import {MatExpansionModule} from '@angular/material/expansion'; 
import { ModalModule } from 'ngx-bootstrap/modal';
 import {MatSelectModule} from '@angular/material/select';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { AboutUsComponent } from './about-parent/about-us.component';
import { AboutUsLeftComponent } from './about-us-left/about-us-left.component';
import { FAQsComponent } from './about-parent/faqs/faqs.component';
import { TermsComponent } from './about-parent/terms/terms.component';
import { PrivacyPolicyComponent } from './about-parent/privacy-policy/privacy-policy.component';
import { AboutComponent } from './about-parent/about/about.component';
import { DescriptionComponent } from './description/description.component';
import { LoginSinupComponent } from './login-sinup/login-sinup.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ModalComponent } from './modal/modal.component';
import { BlogComponent } from './blog/blog.component';
 import { NgxPaginationModule } from 'ngx-pagination';
 import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BlogDiscComponent } from './blog/blog-disc/blog-disc.component';
import { ContentComponent } from './blog/content/content.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
  


  
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    Del1Component,
    Del2Component,
    Del3Component,
    Del4Component,
    CommonComponent,
    CommonchildComponent,
    FooterComponent,
    BottomNavComponent,
    AboutUsComponent,
    AboutUsLeftComponent,
    FAQsComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    AboutComponent,
    DescriptionComponent,
    LoginSinupComponent,
    LoyaltyComponent,
    HeaderComponent,
    TopHeaderComponent,
    ModalComponent,
    BlogComponent,
    BlogDiscComponent,
    ContentComponent,
  
      
    
  
 
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    SidebarModule,
     BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule,
     MatListModule,
     MatListModule,
     MatBottomSheetModule,
     MatToolbarModule,
     DialogModule,
     BrowserAnimationsModule,
     TypeaheadModule.forRoot(),
     ReactiveFormsModule ,
     FormsModule,
     MatFormFieldModule,
     MatAutocompleteModule,
     ReactiveFormsModule,
     NgFor,
     AsyncPipe,
    MatInputModule,
    MatChipsModule,
    ButtonsModule.forRoot(),
    CarouselModule,
    MatExpansionModule,
    ModalModule.forRoot(),
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,
    FormsModule,
    CarouselModule,
    AutocompleteLibModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 3000,
    // positionClass: 'toast-bottom-right',
     preventDuplicates: true, 
    closeButton: true
      }
    ),
 
     
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
