import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit{

  isLogged:boolean=false
  tasks:any[]=[]

  constructor(private auth:AuthService,private task:TaskService){}
  
  ngOnInit(): void {
    this.auth.isLogged().subscribe(logged=>{
      this.isLogged=logged
    })
    this.task.showTasks(this.auth.getIdUser()).subscribe(data=>{
      this.tasks = data as any[]
    })
  }

}
