import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:string= localStorage.getItem('password')  || '';
  email:string= localStorage.getItem('email') || '';
  formu :FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formu = new FormGroup({
        email: new FormControl(this.email,[Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
        ]),
        password: new FormControl(this.password,Validators.required),
        recuerdame: new FormControl(true)
    });
  }


  recuerdame(){
   if(this.formu.value.recuerdame){
     console.log(this.formu.value.recuerdame);
     console.log('pase por aqui');
     localStorage.setItem('email',this.formu.value.email);
     localStorage.setItem('password',this.formu.value.password);

   }else{
     if(localStorage.length>0){
   localStorage.removeItem('email');
   localStorage.removeItem('password');
    this.password="";
    this.email="";

     }
  }
  }



  RegistrarUsuario(){
    if (this.formu.valid){
      console.log('inicio session');
      console.log(this.formu.value.recuerdame);
      this.recuerdame();
    }else{
      console.log ("su conrseña o correo son incorrectos");
    }

  }

}
