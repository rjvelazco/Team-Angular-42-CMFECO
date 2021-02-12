import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = localStorage.getItem('email') || '';
  public check: boolean;

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.check = this.form.value.remember;
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
    (this.check)? localStorage.setItem('email', this.form.value.email): localStorage.removeItem('email');
  }


  loginUser(): void {
    // event.preventDefault();
    // event: Event
    if (this.form.valid) {
      const user = this.form.value;
      this.rememberData();
    } else {
      // In case someone send the form, we mark all the controls as 'touched' 
      // to be able to show errors.
      Object.values(this.form.controls).forEach(control => control.markAllAsTouched());
    }
  }
}
