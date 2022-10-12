import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  gettoken() {
    return !!sessionStorage.getItem('Token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('https://api.storerestapi.com/auth/login', {
      email: email,
      password: password,
    });
  }
}
