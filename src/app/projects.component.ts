import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-grid">
          <article class="project-card" *ngFor="let p of projects">
            <div class="project-image">Image placeholder</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.description }}</p>
            <div class="project-links">
              <a href="#" aria-label="GitHub link">GitHub</a>
              <a href="#" aria-label="Live demo link">Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .projects-section {
      background: #fff;
      padding: 4rem 1.25rem;
      color: #212529;
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      animation: revealUp 0.7s ease both;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }
    .project-card {
      border: 1px solid #dee2e6;
      padding: 1rem;
      border-radius: 0.75rem;
      background: #fefefe;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .project-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.09); }
    .project-image {
      height: 150px;
      border-radius: 0.75rem;
      background: linear-gradient(135deg, #e9ecef, #dee2e6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6c757d;
      font-weight: 600;
    }
    .project-links {
      display: flex;
      gap: 0.5rem;
    }
    .project-links a {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
    }
    `
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'SmartTask Pro',
      description: 'Enterprise task manager with realtime collaboration, role-based access, and analytics dashboard built using Angular (standalone components), Node.js, and PostgreSQL.',
      github: '#',
      live: '#'
    },
    {
      title: 'CloudShop',
      description: 'E-commerce microservices platform with AWS Lambda serverless backend, Stripe payments, and CI/CD via GitHub Actions.',
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS admin panel built with Angular + RxJS, featuring GraphQL queries and strict typed forms.',
      github: '#',
      live: '#'
    }
  ];
}
