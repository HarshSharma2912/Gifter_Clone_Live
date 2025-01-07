import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

}
