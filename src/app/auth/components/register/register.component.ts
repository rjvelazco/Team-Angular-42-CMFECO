import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from 'src/app/core/services/usuario.service';

import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public form: FormGroup;
  public emailRegularExpression: RegExp = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

  // Getters -> Validar usuario
  get usernameInvalid() {
    return this.form.get('username').invalid && this.form.get('username').touched
  }
  
  get emailInvalid() {
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  get passwordInvalid() {
    return this.form.get('password').invalid && this.form.get('password').touched
  }

  get confirmPasswordInvalid() {
    const password1 = this.form.get('password').value;
    const password2 = this.form.get('confirmPassword').value;
    return (password1 !== password2);
  }
  
  constructor(
    private formBuilder     : FormBuilder,
    private usuarioService  : UsuarioService,
    private router          : Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username        : new FormControl('', [Validators.required, Validators.minLength(6)]),
      email           : new FormControl('', [Validators.compose([Validators.required,Validators.pattern(this.emailRegularExpression)])]),
      password        : new FormControl('', [Validators.required , Validators.minLength(6)]),
      confirmPassword : new FormControl('', [Validators.required]),
    },
    {
      validators: this.validatePassword('password','confirmPassword')
    });
  }

  async createUser(form){
    const { username, email, password } = form;

    if (this.form.invalid) {
      this.errorMessage('¡Formulario inválido!', 'Complete debidamente el registro, por favor.');
      this.markAsTouched();
    } else {
      try {
        const { user } = await this.usuarioService.register(username, email, password);
        Swal.fire({
          title: '¡Bienvenido!',
          text: `Verifica tu email ${user.email} para continuar.`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.form.reset();
        this.router.navigateByUrl('/login');
      } catch (error) {
        this.errorMessage('¡Error!', 'El email ya ha sido registrado.');
      }
    }
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

  markAsTouched():void{
    Object.values(this.form.controls).forEach(control => control.markAllAsTouched());
  }

  errorMessage(title:string, message:string):void{
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }


}
