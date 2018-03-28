import { NotifyService } from './../_services/notify.service';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loginForm: FormGroup

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  /* Creates form */
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /* Sends login request to authService */
  login() {
    this.authService.login(this.loginForm.value);
    this.router.navigate(['/search']);
    this.notifyService.success("You have been successfully signed in.");
  }

}
