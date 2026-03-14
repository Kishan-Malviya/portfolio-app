import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <h2>Skills</h2>
        <p class="subtext">Modern development stack and tools.</p>
        <div class="skill-grid">
          <article class="skill-card">
            <h3>Java</h3>
          </article>
          <article class="skill-card">
            <h3>SQL</h3>
          </article>
          <article class="skill-card">
            <h3>System Design</h3>
          </article>
          <article class="skill-card">
            <h3>Microservices</h3>
          </article>
          <article class="skill-card">
            <h3>Spring Boot</h3>
          </article>
          <article class="skill-card">
            <h3>Spring Data JPA</h3>
          </article>
          <article class="skill-card">
            <h3>Spring Batch</h3>
          </article>
          <article class="skill-card">
            <h3>Spring Security</h3>
          </article>
          <article class="skill-card">
            <h3>RabbitMQ</h3>
          </article>
          <article class="skill-card">
            <h3>Redis</h3>
          </article>
          <article class="skill-card">
            <h3>Angular</h3>
          </article>
          <article class="skill-card">
            <h3>AWS</h3>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .skills-section {
      background: #f8f9fa;
      color: #212529;
      padding: 4rem 1.25rem;
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
      animation: revealUp 0.7s ease both;
    }
    .subtext { color: #6c757d; margin-bottom: 1.25rem; }
    .skill-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 1rem;
    }
    .skill-card {
      border: 1px solid #dee2e6;
      border-radius: 0.8rem;
      padding: 1rem;
      background: #fff;
      box-shadow: 0 8px 25px rgba(0,0,0,0.04);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .skill-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
    `
  ]
})
export class SkillsComponent {}
