import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchText = '';
  counter = 0;

  constructor(private navbarService: NavbarService, private router: Router) {
    this.navbarService.counter.subscribe((x: any) => {
      this.counter = x;
    });
  }

  ngOnInit(): void {}

  clear() {
    this.searchText = '';
  }

  logoutClicked() {
    this.router.navigateByUrl('/login');
  }
}
