import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'tasks',
        title:'TASKS',
        component:NotesComponent
    },
    {
        path:'about',
        title:'ABOUT',
        component:AboutComponent
    },
    {
        path:'login',
        title:'LOGIN',
        component:LoginComponent
    },
    {
        path:'register',
        title:'REGISTER',
        component:RegisterComponent
    },
    {
        path:'',
        redirectTo:'/tasks',
        pathMatch:'full'
    }
];
