import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css',
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };

  errorMessage = '';

  constructor(private authService: AuthService) {}

  router = new Router();

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    if (
      this.formData.username === 'przykladowyUzytkownik' &&
      this.formData.password === 'przykladoweHaslo'
    ) {
      console.log('Zalogowano pomyślnie');
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Błąd logowania. Sprawdź dane.';
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}
