import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Animation,AnimationController } from '@ionic/angular';
import { NavController } from '@ionic/angular'
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  email:string = "";
  password:string = "";

  private animation1!: Animation;
  private animation2!: Animation;

  constructor(private authService:AuthService, private router:Router, private navController:NavController, private aController:AnimationController) { }

  ngOnInit() {}

  async login(){
    try{
      await this.authService.login(this.email,this.password);
      alert("Logueado Exitosamente!");
      this.router.navigate(["/home-inicio"]);
    }catch(error){alert("Error al intentar Loguearse !"+error)}
  }

  async register(){
    try{
      await this.authService.register(this.email,this.password);
      alert("Registrado Exitosamente!"+this.email);
      this.router.navigate(["/inicio"]);
    }catch(error){alert("Error al intentar registrarse !"+error)}
  }


  ngAfterViewInit(){
    this.animation1 = this.aController.create()
    .addElement(document.querySelector('.logo') as HTMLElement)
    .duration(750)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, background:'yellow' },
      { offset: 0.20, background:'green' },
      { offset: 0.40, background:'purple' },
      { offset: 0.72, background:'cian' },
      { offset: 1, background:'red' }
    ])
    ;
    this.animation2 = this.aController.create()
    .addElement(document.querySelector('.logo') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .keyframes([ 
      { offset: 0, scale: '1'},
      { offset: 0.20, scale: '0.87'},
      { offset: 0.40, scale: '1' },
      { offset: 0.72, scale: '0.87' },
      { offset: 1, scale: '1' }
    ])
  }
  

  color(){
    this.animation1.play()
  }
  mover(){
    this.animation2.play()
  }
  stop(){
    this.animation1.stop()
    this.animation2.stop()
  }
}
