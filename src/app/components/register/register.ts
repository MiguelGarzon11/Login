import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  user: string = '';
  email: string = '';
  cEmail: string = '';
  private _password: string = '';
  private _cPassword: string = '';

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get cPassword(): string {
    return this._cPassword;
  }

  set cPassword(value: string) {
    this._cPassword = value;
  }

  register(): void {

    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/;

    // Validación de campos.
    if (!this.user || !this.email || !this.cEmail || !this.password || !this.cPassword) {
      alert("Ingrese todos los campos solicitados.")
      return;
    }
    // Validación de email.
    if (!regex.test(this.email)) {
      alert("El email debe ser válido y pertenecer a un dominio.")
      return;
    }
    // Validación de contraseña.
    if (this.password.length < 6) {
      alert("La contraseña debe contener por lo menos 6 caracteres.")
      return;
    }
    // Validación de confirmación de email y password.
    if (this.cEmail !== this.email || this.cPassword !== this.password) {
      alert("El correo o contraseña no coinciden.")
      return;
    }

  }
}
