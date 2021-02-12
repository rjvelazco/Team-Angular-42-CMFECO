import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = localStorage.getItem('email') || '';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }


  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: [`${this.email}`, [
        Validators.required,
        Validators.pattern(
          /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]],
      password: ['', [Validators.required]],
      remember: ['']
    });
  }

  rememberData(): void {
    const check = this.form.value.remember;
    if (check) {
      localStorage.setItem('email', this.form.value.email);
    } else {
      localStorage.removeItem('email');
    }
  }


  loginUser(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      this.rememberData();
    }
  }
}
