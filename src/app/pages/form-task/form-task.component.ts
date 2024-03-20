import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {

  titulo:string="";
  descripcion:string="";
  fecha_finalizacion:string="";

  constructor(private task:TaskService,private auth:AuthService,private route:Router){}

  addTask(){
    const new_date = new Date(this.fecha_finalizacion)
    const date_info = new_date.toISOString
    const task={"titulo":this.titulo, "descripcion":this.descripcion, "fecha_finalizacion":date_info}
    this.task.addTask(this.auth.getIdUser(),task).subscribe(data=>{
      console.log(data)
      this.route.navigate(["/tasks"])
    })
  }

}
