import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  progresses = [
    {name: 'DESIGN', percentage: 60},
    {name: 'DEVELOPMENT', percentage: 90},
    {name: 'PHOTOGRAPHY', percentage: 30},
    {name: 'SEO', percentage: 80},
    {name: 'REST', percentage: 75},
    {name: 'Flutter', percentage: 75},
    {name: 'Drupal 8', percentage: 75},
    {name: 'Drupal 7', percentage: 90},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
