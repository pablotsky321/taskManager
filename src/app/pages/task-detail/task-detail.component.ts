import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit{

  taskForm: FormGroup
  dataApi:{}={};
  isDatachanged:boolean = false;
  id_task!:string;

  constructor(private route:ActivatedRoute,private router:Router,private taskService:TaskService,private fb:FormBuilder){
    this.taskForm = this.fb.group({
      titulo:[''],
      descripcion:[''],
      fecha_finalizacion:['']
    })
  }

  ngOnInit(): void {
    const id_task = this.route.snapshot.paramMap.get('id_task')
    this.id_task = id_task !== null ? id_task : ''
    this.taskService.detailTask(this.id_task).subscribe(data=>{
       console.log(data)
    })
  }



}
