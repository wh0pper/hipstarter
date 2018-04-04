import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
  providers: [ProjectService]
})
export class ProjectAddComponent {

  constructor(private projectService: ProjectService) { }

  submitForm(name: string, starters: string, description: string, goal, rewards: string) {
    let startersArray = starters.split(',');
    let newProject: Project = new Project( name, startersArray, description, parseInt(goal), rewards);
    this.projectService.addProject(newProject);
  }

}
