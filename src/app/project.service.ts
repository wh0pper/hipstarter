import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  getLastProjectId() {
    return this.database.list('projects');
  }

  updateProject(localUpdatedProject) {
    let projectInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectInFirebase.update({name: localUpdatedProject.name,
                              starters: localUpdatedProject.starters,
                              summary: localUpdatedProject.summary,
                              description: localUpdatedProject.description,
                              goal: localUpdatedProject.goal,
                              rewards: localUpdatedProject.rewards,
                            });
  }

  deleteProject(localProject) {
    let projectInFirebase = this.getProjectById(localProject.$key);
    projectInFirebase.remove();
  }
}
