import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = localStorage.getItem('email') || '';

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.authService.getCurrentUser().subscribe(data => console.log(data));
  }

  // Getters - Errors.
  
  get emailInvalid() {
    return this.form.get('email').hasError('pattern');
  }

  get emailIsEmpty() {
    return this.form.get('email').hasError('required') && this.form.get('email')?.touched;
  }

  get passwordInvalid() {
    return this.form.get('password').hasError('required') && this.form.get('password')?.touched;
  }

  get checkRemember() {
    return this.form.value.remember;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: [`${this.email}`, [
        Validators.required,
        Validators.pattern(
          /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  rememberData(): void {
    (this.checkRemember)? localStorage.setItem('email', this.form.value.email): localStorage.removeItem('email');
  }


  loginUser(): void {
    // console.log('form ->', this.form.value.email);

    if (this.form.valid) {
    
      const { email, password } = this.form.value;

      this.authService.login(email, password)
        .then((user) => {
          console.log('Se ejecuta:',user);
          // this.router.navigateByUrl('/login');
          this.router.navigateByUrl('/dashboard');
        });

    } else {
      // In case someone send the form, we mark all the controls as 'touched' 
      // to be able to show errors.
      Object.values(this.form.controls).forEach(control => control.markAllAsTouched());
    }
  }
}
