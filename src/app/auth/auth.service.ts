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
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login', {
      email: email,
      password: password,
    });
  }
}
