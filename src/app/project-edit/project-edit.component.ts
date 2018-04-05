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
  currentProjectObject: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.selectedProject.subscribe(data => this.currentProjectObject = data);
  }

  updateProjectInDatabase(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }

}
