import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  navbarOpen = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    const navbarItems = document.querySelectorAll('.navbar-nav>li');
    navbarItems.forEach((navbarItem) => {
      navbarItem.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        navbar.classList.remove('show');
      });
    });
  }

  loaded() {
    console.log("loaded");
  }
}
