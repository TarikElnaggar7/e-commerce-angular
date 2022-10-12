import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  AllProducts: any;
  categories = [
    { name: 'smartphones', checked: false },
    { name: 'laptops', checked: false },
    { name: 'skincare', checked: false },
    { name: 'home-decoration', checked: false },
    { name: 'groceries', checked: false },
  ];
  prices = [
    { name: '0 --> 50', value: '50', checked: false },
    { name: '0 --> 100', value: '100', checked: false },
    { name: '100 --> Last', value: '1000', checked: false },
  ];
  categoryFilter: any;

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
  filteredProducts: any;

  constructor(
    private homeService: HomeService,
    private _formBuilder: FormBuilder
  ) {}

  categoryCheck() {
    let z = this.categories.find((element) => {
      return element.checked == true;
    });

    this.filteredProducts = this.AllProducts.filter((x: any) => {
      return x.category == z?.name;
    });

    if (this.filteredProducts.length <= 0) {
      this.filteredProducts = this.AllProducts;
    }
  }

  priceCheck() {
    let z: any = null;

    z = this.prices.find((element) => {
      return element.checked == true;
    });
    this.filteredProducts = this.AllProducts.filter((x: any) => {
      console.log('z.value', z.value);
      console.log('x.price', x.price);

      if (x.price <= z.value) {
        console.log(x);
        return x;
      } else {
        this.filteredProducts = this.AllProducts;
      }
    });
  }

  ngOnInit(): void {
    this.homeService.getAllItems().subscribe((response: any) => {
      this.AllProducts = response.products;
      this.filteredProducts = this.AllProducts;
    });
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
}
