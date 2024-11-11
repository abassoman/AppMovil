import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router:Router) {}

  async onResetPassword() {
    try {
      await this.authService.resetPassword(this.email);
      alert("Correo de recuperación enviado, revisa tu bandeja de entrada.");
      this.errorMessage = '';
      this.router.navigate(["/inicio"]);
    } catch (error) {
      this.errorMessage = 'Hubo un error al enviar el correo de recuperación.';
      this.successMessage = '';
      console.error('Error:', error);
    }
  }
}