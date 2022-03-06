import { Component, OnInit } from '@angular/core';
import {SignInForm} from "../../model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  form: any = {};
  // @ts-ignore
  signInForm: SignInForm;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.singIn(this.signInForm).subscribe(data=>{
      if(data.token !=null) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRole(data.roles);
        this.router.navigate(['user-account'])

      }
    })
  }

}
