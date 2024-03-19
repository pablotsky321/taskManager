import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!:String
  password!:String

  constructor(private auth:AuthService,private route:Router){
  }

  login(){
    const logInfo = {"username":this.username,"password":this.password}
    this.auth.login(logInfo).subscribe(data=>{
      if(data?.token == null){
        this.auth.setLogged(false)
      }else{
        this.auth.setToken(data.token)
        this.auth.setLogged(true)
        this.route.navigate(['/tasks'])
      }
    })
  }

}
