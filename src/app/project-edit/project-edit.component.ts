import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
  providers: [ProjectService]
})
export class ProjectEditComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
  }

  updateProjectInDatabase(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }

  deleteProjectFromDatabase(projectToDelete) {
    console.log('project:',projectToDelete.$key);
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }

}
