import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'new', component: ProjectAddComponent },
  { path: 'edit/:id', component: ProjectEditComponent },
  { path: 'admin', component: AdminComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
