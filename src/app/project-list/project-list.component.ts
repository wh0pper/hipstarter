import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projectsProgressArray: String[];
  projects: FirebaseListObservable<any[]>;
  // currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

  returnPercentage(project) {
    let styleString = (project.progress/project.goal * 100) + '%';
    return styleString;
  }

}
