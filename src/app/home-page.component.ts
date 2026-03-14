import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  template: `
    <main class="page-content">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
    :host {
      display: block;
      background: #f8f9fa;
      color: #212529;
      scroll-behavior: smooth;
    }
    .page-content {
      overflow-x: hidden;
    }
    `
  ]
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment) {
          const target = document.getElementById(fragment);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
