import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { NavbarService } from '../shared/navbar/navbar.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  productDetails: any;
  counter: number;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private navBarService: NavbarService
  ) {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.getProductById();
    this.navBarService.counter.subscribe((x: any) => {
      this.counter = x;
    });
  }

  ngOnInit(): void {}

  getProductById() {
    this.homeService.getProductById(this.productId).subscribe((response) => {
      this.productDetails = response;
    });
  }

  addCart() {
    this.counter = this.counter + 1;
    this.navBarService.counter.next(this.counter);
  }

  backToList() {}
}
