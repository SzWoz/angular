import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css',
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    if (
      this.formData.username === 'przykladowyUzytkownik' &&
      this.formData.password === 'przykladoweHaslo'
    ) {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}
