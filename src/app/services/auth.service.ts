import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged:boolean=false;

  constructor(private http:HttpClient){

  }

  login(logInfo:{}):Observable<Login | undefined>{
    return this.http.post<Login>(enviroment.authUrl,logInfo).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined)
      })
    )
  }
  
  register(registerInfo:{}):Observable<Register|undefined>{
    return this.http.post<Register>(enviroment.authUrl,registerInfo).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined)
      })
    )
  }

}
