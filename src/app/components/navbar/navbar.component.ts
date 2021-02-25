import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  items = [
    {name: 'Inicio', value: 'home'},
    {name: 'Servicios', value: 'services'},
    {name: 'Acerca de', value: 'about'},
    {name: 'Trabajo', value: 'work'},
    {name: 'Contacto', value: 'contact'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
