import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
