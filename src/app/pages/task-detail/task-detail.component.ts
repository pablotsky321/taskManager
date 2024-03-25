import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit{

  taskForm: FormGroup
  dataApi:any;
  isDataChanged:boolean = false;
  id_task!:any;

  constructor(private route:ActivatedRoute,private router:Router,private taskService:TaskService,private fb:FormBuilder){
    this.taskForm = this.fb.group({
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      fecha_finalizacion: new FormControl('')
    })
  }

  ngOnInit(): void {
    const id_task = this.route.snapshot.paramMap.get('id_task')
    this.id_task = id_task !== null ? id_task : ''
    this.taskService.detailTask(this.id_task).subscribe(data=>{
       this.id_task = data?.id;
       this.taskForm.patchValue({
        titulo: data?.titulo,
        descripcion: data?.descripcion,
        fecha_finalizacion: data?.fecha_finalizacion
       })
       this.dataApi = {"titulo":data?.titulo,"descripcion":data?.descripcion,"fecha_finalizacion":data?.fecha_finalizacion}
       this.dataApi = this.taskForm.value 
    })
  }

  checkDataChanges() {
    this.isDataChanged = JSON.stringify(this.dataApi) !== JSON.stringify(this.taskForm.value);
  }

  actualizarDatos() {
    const date_finish = new Date(this.taskForm.value.fecha_finalizacion).toISOString
    const task={titulo: this.taskForm.value.titulo, descripcion: this.taskForm.value.descripcion, fecha_finalizacion:date_finish}
    this.taskService.updateTask(this.id_task,task).subscribe(data=>{
    
    })
    this.dataApi = this.taskForm.value; 
    this.isDataChanged = false; 
    this.router.navigate(['/tasks'])
  }

}
