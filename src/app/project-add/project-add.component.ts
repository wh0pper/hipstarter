import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
  providers: [ProjectService]
})
export class ProjectAddComponent {

  constructor(private router: Router, private projectService: ProjectService) { }

  submitForm(name: string, starters: string, summary: string, description: string, goal, rewards: string) {
    let startersArray = starters.split(',');
    if (goal=='') {
      goal = '0';
    }
    let newProject: Project = new Project(name, startersArray, summary, description, parseInt(goal), rewards);
    this.projectService.addProject(newProject);
    this.navigateToNewProject();
  }

  navigateToNewProject() {
    this.projectService.getLastProjectId().subscribe(data => {
      this.router.navigate(['projects', data[data.length-1].$key]);
    });
  }

}
