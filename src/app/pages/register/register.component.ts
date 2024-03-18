import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombres!: string
  apellidos!: string
  username!: string
  password!: string

  constructor(private auth: AuthService) { }

  register() {
    const regInfo = { "nombres": this.nombres, "apellidos": this.apellidos, "username": this.username, "password": this.password }
    this.auth.register(regInfo).subscribe(data => {
      console.log(data)
      this.nombres=""
      this.apellidos=""
      this.username=""
      this.password=""
    })
  }

}
