import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  isLogged:boolean=false

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.auth.isLogged().subscribe(logged=>{
      this.isLogged = logged
    });
  }

  logout(){
    this.auth.logout().subscribe(data=>{
      this.auth.setToken("")
      this.auth.setLogged(false)
      sessionStorage.removeItem("token")
    })
  }

}
