import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit{

  isLogged:boolean=false

  constructor(private auth:AuthService){}
  
  ngOnInit(): void {
    this.auth.isLogged().subscribe(logged=>{
      this.isLogged=logged
    })
  }

}
