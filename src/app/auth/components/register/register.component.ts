import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FormData: FormGroup;

  constructor(
    private fB: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.FormData = this.fB.group({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])]),
      password: new FormControl('', [Validators.required , Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required]),
      checkTerms: new FormControl('', [Validators.required, Validators.requiredTrue])
    },
    {
      validators: this.validatePassword('password','confirmPassword')
    });
  }

  async createUser(formData){
    const { email, password } = formData;
    
    try {
      const { user} = await this.authService.register(email, password);
      Swal.fire({
        title: '¡Bienvenido!',
        text: `Verifica tu email [${user.email}] para continuar`,
        icon: 'success',
        confirmButtonText: 'Cool'
      });
      this.FormData.reset();
      this.router.navigateByUrl('/login');
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'El email ya ha sido registrado.',
        icon: 'error',
        confirmButtonText: 'Cool'
      }); 
    }
  }

  get usernameInvalid() {
    return this.FormData.get('username').invalid && this.FormData.get('username').touched
  }
  get emailInvalid() {
    return this.FormData.get('email').invalid && this.FormData.get('email').touched
  }
  get passwordInvalid() {
    return this.FormData.get('password').invalid && this.FormData.get('password').touched
  }
  get checkTermsInvalid() {
    return this.FormData.get('checkTerms').invalid && this.FormData.get('checkTerms').touched
  }

  get confirmPasswordInvalid() {
    const password1 = this.FormData.get('password').value;
    const password2 = this.FormData.get('confirmPassword').value;
    return ( password1 === password2) ? false : true;
  }

  validatePassword(p1: string, p2: string){
    return ( formGroup: FormGroup ) => {
      const p1Control = formGroup.controls[p1];
      const p2Control = formGroup.controls[p2];

      if( p1Control.value === p2Control.value){
        p2Control.setErrors(null);
      }else{
        p2Control.setErrors({noEsIgual: true});
      }
    }
  }


}
