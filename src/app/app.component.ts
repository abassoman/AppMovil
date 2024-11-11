import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home-inicio', icon: 'home' },
    { title: 'Agregar Auto', url: 'autos', icon: 'car' },
    { title: 'Listar Autos', url: 'listar-autos', icon: 'list' },
    { title: 'Pasajero', url: 'pasajeros', icon: 'accessibility' },
    { title: 'Conductor', url: 'conductores', icon: 'man' },
    { title: 'Listar Viajes', url: 'lista-viaje', icon: 'list' },
    
  ];
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private menuController: MenuController  
  ) {
    this.initializeApp();
  }
  
  checkMenuVisibility(url: string) {
    // Oculta el menú en las rutas
    if ( url === '/inicio' ||  url === '/registrar' ||url ==='/recupera-contra') {
      this.menuController.enable(false);
    } else {
      this.menuController.enable(true);
    }
  }
  
  initializeApp() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkMenuVisibility(event.url);
      }
    });
  }
  
  logout() {
    this.authService.logout().then(() => {
      // Redirigir al usuario a la página de inicio de sesión o página principal
      this.router.navigate(['/inicio']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}
