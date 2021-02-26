import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

// Services
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  get emailInvalid() {
    return this.form.get('email').hasError('pattern');
  }

  get emailIsEmpty() {
    return this.form.get('email').hasError('required') && this.form.get('email')?.touched;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(
          /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]]
    });
  }

  async resetPassword() {
    if (this.form.valid) {
      const { email } = this.form.value;
      try {
        await this.authService.resetPassword(email);
        Swal.fire({
          title: 'Email Enviado',
          text: 'Recuerde revisar la bandeja de span y/o correo no desado',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Object.values(this.form.controls).forEach(control => control.markAllAsTouched());
    }
  }

}
