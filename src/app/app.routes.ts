import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "About me!"},
    {path: "projects", component: ProjectsComponent, title: "My projects"},
];
