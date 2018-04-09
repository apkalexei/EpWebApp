import { UserForRegistration } from './../_models/user/UserForRegistration';
import { NotifyService } from './../_services/notify.service';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegistered: boolean = false;
  user: UserForRegistration;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.createLoginForm();
    this.createRegisterForm();
  }

  /* Creates sign-in form */
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /* Creates register form */
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});
  }

  /* Validates password inputs in registerForm */
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
  }

  /* Sends register request to authService */
  register() {
    this.user = Object.assign({}, this.registerForm.value);
    this.authService.register(this.user).subscribe(data => {
      this.isRegistered = true;
      this.notifyService.success('Registration was successful');
    }, error => {
      this.notifyService.error(error);
    });
  }

  /* Sends login request to authService */
  login() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      this.notifyService.success('You have been successfully signed in');
    }, error => {
      this.notifyService.error('Failed to sign-in');
    }, () => {
      this.router.navigate(['/search']);
    });
  }

}
