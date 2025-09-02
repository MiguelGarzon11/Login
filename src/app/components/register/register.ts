import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  user: string = '';
  email: string = '';
  cEmail: string = '';
  password: string = '';
  cPassword: string = '';

  register() {

    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/;

    // Validación de campos.
    if (!this.user.trim() || !this.email.trim() || !this.cEmail.trim() || !this.password.trim() || !this.cPassword.trim()) {
      alert("Ingrese todos los campos solicitados.");
      return;
    }
    // Validación de email.
    if (!regex.test(this.email)) {
      alert("El email debe ser válido y pertenecer a un dominio.");
      return;
    }
    // Validación de contraseña.
    if (this.password.length < 6) {
      alert("La contraseña debe contener por lo menos 6 caracteres.");
      return;
    }
    // Validación de confirmación de email y password.
    if (this.cEmail !== this.email || this.cPassword !== this.password) {
      alert("El correo o contraseña no coinciden.");
      return;
    }

    fetch('http://127.0.0.1:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.user,
        email: this.email,
        cEmail: this.cEmail,
        password: this.password,
        cPassword: this.cPassword
      })
    })

      .then(response => response.json())
      .then(data => {
        console.log('Respuesta de la API:', data);
        alert('Usuario creado con exito.');
      }).catch(error => {
        console.log('Error: ', error);
        alert('Hubo un error creando el usuario.');
      })


  }
}
