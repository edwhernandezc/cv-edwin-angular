import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  services = [
    {name: 'DESIGN', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', icon: 'design_services'},
    {name: 'DEVELOPMENT', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', icon: 'code'},
    {name: 'PHOTOGRAPHY', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', icon: 'camera_enhance'},
    {name: 'SEO', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', icon: 'search'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
