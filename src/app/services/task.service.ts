import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, Observable, of } from 'rxjs';
import { Task } from '../interfaces/task';
import { enviroment } from '../enviroments/enviroments';
import { HeaderRequestService } from './header-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient,private auth:AuthService,private headers:HeaderRequestService) { }

  addTask(id_user:string,task:{}):Observable<Task | undefined>{
    return this.http.post<Task>(`${enviroment.taskUrl}/add/${this.auth.getIdUser()}`,task,{headers:this.headers.getHeader()}).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined)
      })
    )
  }
  
  showTasks(id_user:string):Observable<Task[] | undefined>{
    return this.http.get<Task[]>(`${enviroment.taskUrl}/show/${id_user}`,{headers:this.headers.getHeader()}).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined)
      })
    )
  }

  deleteTask(id_task:string):Observable<string | undefined>{
    return this.http.delete<string>(`${enviroment.taskUrl}/delete/${id_task}`,{headers:this.headers.getHeader()}).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

}
