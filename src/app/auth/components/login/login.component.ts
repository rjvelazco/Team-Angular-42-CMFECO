import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

// Services
import { UsuarioService } from '../../../core/services/usuario.service';

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
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    // this.usuarioService.getCurrentUser().subscribe(data => console.log(data));
  }

  // Getters - Errors.

  get emailInvalid() {
    return this.form.get('email').hasError('pattern') && this.form.get('email').touched;
  }

  get emailIsEmpty() {
    return this.form.get('email').hasError('required') && this.form.get('email').touched;
  }

  get passwordInvalid() {
    return this.form.get('password').hasError('required') && this.form.get('password').touched;
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
      remember: [ localStorage.getItem('remember') || false]
    });
  }

  rememberData(): void {
    if(this.checkRemember){
      localStorage.setItem('email', this.form.value.email)
      localStorage.setItem('remember', this.form.get('remember').value);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('remember');
    }
  }


  async loginUser() {
    // console.log('form ->', this.form.value.email);

    if (this.form.valid) {

      const { email, password } = this.form.value;
      try {
        const { user } = await this.usuarioService.login(email, password);
        localStorage.setItem('token',user.uid);
        if (user.emailVerified) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire({
            title: 'Email no verificado',
            text: '¿Desea reenviar el email de verificación?',
            showDenyButton: true,
            confirmButtonText: `Si`,
            icon: 'info',
            denyButtonText: `No`,
          }).then(async (result) => {

            await this.usuarioService.sendVerificationEmail();
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Email Enviado',
                text: 'Recuerde revisar la bandeja de spam y/o correo no deseado.',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            }
          })
        }
      } catch (err) {
        Swal.fire({
          title: '¡Error!',
          text: 'Email y/o contraseña no válidos',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      }

    } else {
      // In case someone send the form, we mark all the controls as 'touched'
      // to be able to show errors.
      Object.values(this.form.controls).forEach(control => control.markAllAsTouched());
    }
  }
}
