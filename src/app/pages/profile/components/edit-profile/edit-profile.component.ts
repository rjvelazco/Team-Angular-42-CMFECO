import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../core/services/usuario.service';

// Models
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  public imagenSubir: string = '';
  public imgTemp: any = '';
  public usuario: Usuario;

  form: FormGroup;
  date3: Date;
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  es: any;
  invalidDates: Array<Date>

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { 
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName        : new FormControl(this.usuario.userName || '', Validators.minLength(6)),
      email           : new FormControl(this.usuario.email || '', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      sex             : new FormControl(this.usuario.sex || '', Validators.minLength(8)),
      birthDate       : new FormControl(this.usuario.birthDate || '',),
      country         : new FormControl(this.usuario.country || '',),
      password        : new FormControl('', [ Validators.minLength(8)]),
      confirmPassword : new FormControl('', [Validators.required]),
      facebook        : new FormControl(this.usuario.facebook || '', [ Validators.minLength(8)]),
      github          : new FormControl(this.usuario.github || '', [ Validators.minLength(8)]),
      linkedIn        : new FormControl(this.usuario.linkedIn || '', [ Validators.minLength(8)]),
      twitter         : new FormControl(this.usuario.twitter || '', [ Validators.minLength(8)]),
      bio             : new FormControl(this.usuario.bio || '', [ Validators.minLength(8)])
    })
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
  }

  get usernameInvalid() {
    return this.form.get('userName').invalid && this.form.get('userName').touched
  }

  get generInvalid() {
    return this.form.get('sex').invalid && this.form.get('sex').touched
  }

  get dateInvalid() {
    return this.form.get('birthDate').invalid && this.form.get('birthDate').touched
  }

  get countryInvalid() {
    return this.form.get('country').invalid && this.form.get('country').touched
  }

  get facebookInvalid() {
    return this.form.get('facebook').invalid && this.form.get('facebook').touched
  }

  get linkedInInvalid() {
    return this.form.get('linkedIn').invalid && this.form.get('linkedIn').touched
  }

  get githubInvalid() {
    return this.form.get('github').invalid && this.form.get('github').touched
  }

  get twitterInvalid() {
    return this.form.get('twitter').invalid && this.form.get('twitter').touched
  }

  get biographyInvalid() {
    return this.form.get('bio').invalid && this.form.get('bio').touched
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

  // Enviar
  async updateUser(form) {
    console.log(form);
    const { userName, email, bio      ,  birthDate, sex, country, password, facebook, github, linkedIn, twitter } = form;
    const nuevoUsuario = new Usuario(this.usuario.uid, email, userName, this.usuario.role, this.usuario.img, sex, birthDate, country, facebook, github, linkedIn, twitter, bio      ) 
    
    try {
      await this.usuarioService.updateParticipante(nuevoUsuario);
      this.router.navigateByUrl('/perfil');
    } catch (error) {
      console.log(error);
    }
    
  }

  // IMAGEN
  cambiarImagen(file: File) {
    // this.imagenSubir = file;
    if (!file) {
      return this.imgTemp = '';
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgTemp = reader.result;
    }
  }
  

}
