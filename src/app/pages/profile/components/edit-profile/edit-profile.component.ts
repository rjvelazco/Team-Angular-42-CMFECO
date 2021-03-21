import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsuarioService} from '../../../../core/services/usuario.service';
// SweetAlert
import Swal from 'sweetalert2';
// Models
import {Usuario} from '../../../../models/usuario.model';
import { title } from 'process';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {

  public activeState: boolean[] = [false];
  public countries      : any[];
  public imgTemp        : any = '';
  public imagenSubir    : File;
  public usuario        : Usuario;
  public form           : FormGroup;
  public sociableInsignia : string = 'j3U9pxdB2UxcYD3sNtUD';

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {

    const userDate = this.usuario.birthDate;
    const dateBirth = (userDate.length>0)? new Date(userDate): '';

    const useCountry = { name: this.usuario.country }
    this.countries = [
      {name: 'Colombia'},
      {name: 'Mexico'},
      {name: 'Venezuela'},
      {name: 'Guatemala'},
      {name: 'Estados Unidos',},
      {name: 'Costa Rica'},
      {name: 'España'},
      {name: 'Bolivia'},
      {name: 'Ecuador'},
      {name: 'Brasil'}
    ];

    this.form = this.formBuilder.group({
      userName   : [this.usuario.userName || '', [Validators.required, Validators.minLength(5)]],
      email      : [this.usuario.email || '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      sex        : [this.usuario.sex || '',],
      birthDate  : [dateBirth || '',],
      country    : [useCountry || '',],
      password   : ['', [Validators.minLength(8)]],
      confirmPassword  : ['', [Validators.required]],
      facebook   : [this.usuario.facebook || '',],
      github     : [this.usuario.github || '',],
      linkedIn   : [this.usuario.linkedIn || '',],
      twitter    : [this.usuario.twitter || '',],
      bio        : [this.usuario.bio || '', [Validators.maxLength(140)]]
    },{
      validators: this.passwordsIguales('password', 'confirmPassword')
    });

  }

  get usernameInvalid() {
    return this.form.get('userName').invalid && this.form.get('userName').touched;
  }

  get bioInvalid() {
    return this.form.get('bio').invalid && this.form.get('bio').touched;
  }

  get emailInvalid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get passwordInvalid() {
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  get confirmPasswordInvalid() {
    const password1 = this.form.get('password').value;
    const password2 = this.form.get('confirmPassword').value;
    return (password1 !== password2);
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }


  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  // IMAGEN
  cambiarImagen(file: File) {
    this.imagenSubir = file;
    if (!file) {
      return this.imgTemp = '';
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgTemp = reader.result;
    }
  }

  // Enviar
  async updateUser(form) {

    if (this.form.invalid) {return;}

    const { userName, email, bio, birthDate, sex, password, facebook, github, linkedIn, twitter } = form.value;

    let { country } = form.value;
    country = (!country) ? this.usuario.country : country.name;

    try {
      console.log()
      const nuevoUsuario = new Usuario(this.usuario.uid, email, userName, this.usuario.role, this.usuario.img, sex, birthDate.toString(), country, facebook, github, linkedIn, twitter, bio, this.usuario.event, this.usuario.group, this.usuario.insignias, this.usuario.estado);
      if (!this.usuario.estado) {
        this.usuario.estado = true;
        await  this.getInsigniaSociable(nuevoUsuario);
      }
      await this.usuarioService.updateParticipante(nuevoUsuario);
      Swal.fire({
        title: '¡Actualizado!',
        text: `¡Los datos se han actualizado con éxito!`,
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    } catch (error) {
      Swal.fire({
        title: '¡Error!',
        text: 'No se han podido actualizar los datos.',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    }
  }

  async getInsigniaSociable(usuario: Usuario) {
    const condicional = usuario.userName.length > 0 && usuario.email.length > 0 && usuario.sex.length > 0 && usuario.birthDate.length > 0 && usuario.country.length > 0 && usuario.facebook.length > 0 && usuario.github.length > 0 && usuario.linkedIn.length > 0 && usuario.twitter.length > 0 && usuario.bio.length > 0;
    if (condicional) {
      console.log(this.usuario)
      this.usuario.insignias.push(this.sociableInsignia);
      usuario.estado = true;
      await Swal.fire({
        icon: 'success',
        title: '¡Haz ganado la insignia Sociable!',
        showConfirmButton: true,
        confirmButtonText: `Confirmar`,
      })
    }
  }
}
