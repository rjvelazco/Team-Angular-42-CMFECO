import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  public imgTemp: any = '';

  // Form
  public minDate: Date;
  public maxDate: Date;
  public es: any;
  public invalidDates: Array<Date>
  public form: FormGroup;
  public countries: any[];
  selectedCountry: string;

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  ngOnInit() {
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
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      sex: ['',],
      birthDate: ['',],
      country: ['',],
      password: ['', [Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      facebook: ['',],
      github: ['',],
      linkedin: ['',],
      twitter: ['',],
      bio: ['', [Validators.maxLength(140)]]
    });
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    };

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

  submit(form) {
    console.log(form);
  }

}
