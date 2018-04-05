import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  showEditForm: Boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    console.log(this.projectToDisplay);
  }

  editCurrentProject() {
    this.showEditForm = true;
  }

  deleteCurrentProjectFromDatabase() {
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(this.projectToDisplay);
    }
    this.router.navigate(['']);
  }

}
