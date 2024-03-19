import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedSubject = new BehaviorSubject<boolean>(false);
  private logged$ = this.loggedSubject.asObservable();
  private token: string ="";
  private id_user: string ="";

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
    return this.http.post<Register>(enviroment.registerUrl,registerInfo).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined)
      })
    )
  }

  logout():Observable<any>{
    return this.http.get<any>(`${enviroment.hostUrl}/auth/logout`).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  setLogged(isLogged:boolean){
    this.loggedSubject.next(isLogged);
  }

  isLogged(){
    return this.logged$
  }

  setToken(token:any){
    this.token=token
  }

  getToken(){
    return this.token
  }

  setIdUser(id_user:string){
    this.id_user = id_user
  }

  getIdUser(){
    return this.id_user
  }

}
