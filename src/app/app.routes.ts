import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormTaskComponent } from './pages/form-task/form-task.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'home',
        title:'HOME',
        component:HomeComponent
    },
    {
        path:'tasks',
        title:'TASKS',
        component:NotesComponent,
    },
    {
        path:'tasks',
        children:[
            {
                path:'add_task',
                title:'TASKS | ADD_TASK',
                component:FormTaskComponent
            },
        ]
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
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'**',
        title:'PAGE NOT FOUND',
        component:NotFoundComponent
    }
];
