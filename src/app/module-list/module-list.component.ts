import {Component, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor() {
  }
  private modService: ModuleServiceClient;

  courseId;
  moduleId;
  modules = [];

  // setParams(params) {
  //   this.courseId = params['courseId'];
  //   this.moduleId = params['moduleId'];
  //   this.loadModules(this.courseId);
  // }

  loadModules(courseId) {
    // this.courseId = courseId;
    // this.service.findModulesForCourse(courseId)
    //   .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
