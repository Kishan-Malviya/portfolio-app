import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about-section">
      <div class="section-grid">
        <img src="assets/My_Photo.jpeg" alt="Kishan profile photo" class="profile-image" onerror="console.warn('img load failed', this.src); this.style.display='none'" />
        <div>
          <h2>About Me</h2>
          <p>
            I’m Kishan, a Java Backend Engineer with 4 years of experience designing and building scalable microservices and RESTful APIs
            using Java and Spring Boot. Experienced in building distributed backend systems with Spring Security, RabbitMQ
            messaging, and Redis caching to improve performance and reliability. Skilled in database query optimization, API
            performance tuning, and building robust test suites using JUnit, Mockito, and WireMock. Strong background in
            developing maintainable backend services within microservices-based architectures.
          </p>
          <ul class="highlights">
            <li>✅ 4 years in full-stack development (Angular/Spring/AWS)</li>
            <li>✅ Built RESTful APIs, microservices, and large-scale web platforms</li>
            <li>✅ Engineering lead for 3 cross-functional project teams</li>
            <li>✅ Published tech blog posts and presented at local conferences</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .about-section {
      background: #fff;
      color: #212529;
      padding: 4rem 1.25rem;
    }
    .section-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 1.5rem;
      align-items: center;
      animation: revealUp 0.7s ease both;
    }
    .profile-image {
      width: 100%;
      border-radius: 1rem;
      object-fit: cover;
      aspect-ratio: 1 / 1;
      border: 2px solid #dee2e6;
      box-shadow: 0 8px 18px rgba(0,0,0,0.1);
    }
    .highlights {
      margin: 1rem 0 0;
      padding-left: 1.35rem;
      list-style: none;
      color: #495057;
    }
    .highlights li {
      margin: 0.4rem 0;
    }
    @media (max-width: 900px) {
      .section-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .about-section h2 { margin-top: 1rem; }
    }
    `
  ]
})
export class AboutComponent {}
