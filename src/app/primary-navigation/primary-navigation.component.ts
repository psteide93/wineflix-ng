import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.css'],
})
export class PrimaryNavigationComponent implements OnInit {
  navLinks: Link[] = [
    { name: 'Home', isActive: true },
    { name: 'Whites', isActive: false },
    { name: 'Reds', isActive: false },
    { name: 'Blends', isActive: false },
  ];

  activeLink?: Link

  constructor() {}

  ngOnInit(): void {
    this.navLinks.forEach((link) => {
      if(link.isActive === true){
        this.activeLink = link
      }
    })

  }
}
