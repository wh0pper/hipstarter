import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectAddComponent } from './project-add/project-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    ProjectAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
