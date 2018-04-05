import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private router: Router) {
    this.projects = database.list('projects', {query: {orderByChild: 'progress'}});
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
    console.log(localUpdatedProject.$key);
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
    localProject.subscribe(data => {
      let projectInFirebase = this.getProjectById(data.$key);
      projectInFirebase.remove();
    });
    this.router.navigate(['']);
  }

  updateProgressInDatabase(projectObservable, amount) {
    let newAmount=0;
    let projectInFirebase;
    projectObservable.subscribe(data => {
      projectInFirebase = this.getProjectById(data.$key);
      newAmount = parseInt(data.progress) + parseInt(amount);
    });
    projectInFirebase.update({ progress: newAmount });
  }
}
