import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {

  isLogged: boolean = false
  tasks: any[] = []

  constructor(private auth: AuthService, private task: TaskService,private router:Router) { }

  ngOnInit(): void {
    this.auth.isLogged().subscribe(logged => {
      this.isLogged = logged
    })
    if (!this.isLogged) {

    } else {
      this.cargar()
    }
  }

  deleteTask(id_task: string) {
    this.task.deleteTask(id_task).subscribe(data => {
      this.cargar()
    })
  }

  cargar() {
    this.task.showTasks(this.auth.getIdUser()).subscribe(data => {
      this.tasks = data as any[]
    })
  }

  seeTask(id_task:string){
    this.router.navigate(['tasks/detail',id_task])
  }

}
