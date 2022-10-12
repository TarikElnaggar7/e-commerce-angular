import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  mail: any;
  password: any;
  hasError: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.mail = 'marklyan@gmail.com';
    this.password = 'simple_password';
  }

  ngOnInit() {
    sessionStorage.clear();
  }

  submit() {
    this.toastr.clear();
    if (
      this.mail == 'marklyan@gmail.com' &&
      this.password == 'simple_password'
    ) {
      this.authService.login(this.mail, this.password).subscribe((response) => {
        this.toastr.success('Login succes and token was saved in localStorage');
        sessionStorage.setItem('Token', response.data.access_token);
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 300);
      });
    } else {
      this.hasError = true;
      this.toastr.error(
        'please use the default values of username and password'
      );
      this.mail = 'marklyan@gmail.com';
      this.password = 'simple_password';
    }
  }
}
