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

  ngOnInit() {
  }

}
