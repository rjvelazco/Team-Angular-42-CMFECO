import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import Swal from 'sweetalert2';

// Services
import {UsuarioService} from 'src/app/core/services/usuario.service';
import {HeaderService} from '../../../core/services/header.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public emailRegularExpression: RegExp = new RegExp(' /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)');

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private headerService: HeaderService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.headerService.showLoginBtn.emit(true);
  }

  ngOnDestroy(): void {
    this.headerService.showLoginBtn.emit(false);
  }

  get emailInvalid() {
    return this.form.get('email').hasError('pattern');
  }

  get emailIsEmpty() {
    return this.form.get('email').hasError('required') && this.form.get('email')?.touched;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegularExpression)]]
    });
  }

  async resetPassword() {
    if (this.form.valid) {
      const {email} = this.form.value;
      try {
        await this.usuarioService.resetPassword(email);
        Swal.fire({
          title: 'Email Enviado',
          text: 'Recuerde revisar la bandeja de span y/o correo no deseado.',
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
