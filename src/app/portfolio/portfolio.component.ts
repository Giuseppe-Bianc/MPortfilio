import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';;
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle("Portfolio | My Portfolio");
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
