import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private API_SIGNUP = environment.API_LOCAL + '/signup';
private API_SIGNIN = environment.API_LOCAL + '/signin';
  constructor(private http: HttpClient) { }

  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUp)
  }


  singIn(signUp: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signUp);
  }


}
