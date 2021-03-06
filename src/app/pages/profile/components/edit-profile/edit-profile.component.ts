import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  date3: Date;

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  es: any;

  invalidDates: Array<Date>

  ngOnInit() {
    this.form = this.formBuilder.group({
      nick: new FormControl('', Validators.minLength(6)),
      email: new FormControl('', [Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])]
      ),
      genero: new FormControl('', Validators.minLength(8)),
      fecha: new FormControl('',),
      pais: new FormControl('',),
      password: new FormControl('', [ Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      facebook: new FormControl('', [ Validators.minLength(8)]),
      github: new FormControl('', [ Validators.minLength(8)]),
      linkedin: new FormControl('', [ Validators.minLength(8)]),
      twitter: new FormControl('', [ Validators.minLength(8)]),
      biografia: new FormControl('', [ Validators.minLength(8)])
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
    return this.form.get('nick').invalid && this.form.get('nick').touched
  }

  get generInvalid() {
    return this.form.get('genero').invalid && this.form.get('genero').touched
  }

  get dateInvalid() {
    return this.form.get('fecha').invalid && this.form.get('fecha').touched
  }

  get countryInvalid() {
    return this.form.get('pais').invalid && this.form.get('pais').touched
  }

  get facebookInvalid() {
    return this.form.get('facebook').invalid && this.form.get('facebook').touched
  }

  get linkedinInvalid() {
    return this.form.get('linkedin').invalid && this.form.get('linkedin').touched
  }

  get githubInvalid() {
    return this.form.get('github').invalid && this.form.get('github').touched
  }

  get twitterInvalid() {
    return this.form.get('twitter').invalid && this.form.get('twitter').touched
  }

  get biographyInvalid() {
    return this.form.get('biografia').invalid && this.form.get('biografia').touched
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
}
