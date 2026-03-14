import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="hero-layout">
        <div class="hero-inner">
          <p class="eyebrow">Welcome</p>
          <h1>Hi, I'm Kishan, Backend Engineer</h1>
          <p class="lead">I build modern web experiences with Java, Spring, Angular and cloud platforms.</p>
        </div>
        <div class="hero-actions">
          <a class="cta" role="button" href="javascript:void(0)" (click)="scrollTo('projects', $event)">View My Work</a>
          <a class="cta secondary" role="button" href="javascript:void(0)" (click)="scrollTo('about', $event)">About Me</a>
          <a class="cta secondary" role="button" href="javascript:void(0)" (click)="scrollTo('skills', $event)">Skills</a>
          <a class="cta secondary" role="button" href="javascript:void(0)" (click)="scrollTo('contact', $event)">Contact Me</a>
        </div>
      </div>
      <button
        class="back-to-top"
        *ngIf="showScrollTop"
        (click)="scrollToTop()"
        aria-label="Scroll back to top"
      >
        ↑ Top
      </button>
    </section>
  `,
  styles: [
    `
    .hero-section {
      min-height: 85vh;
      padding: 5rem 1.25rem 3rem;
      background: linear-gradient(135deg, #cfe2ff 0%, #0d6efd 100%);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .hero-nav {
      display: flex;
      gap: 0.9rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 720px;
    }

    .hero-nav a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      padding: 0.45rem 0.75rem;
      border-radius: 0.45rem;
      transition: background 0.25s ease;
    }

    .hero-nav a:hover,
    .hero-nav a:focus-visible {
      background: rgba(255, 255, 255, 0.18);
    }

    .hero-layout {
      width: 100%;
      max-width: 1140px;
      display: grid;
      grid-template-columns: 1fr 260px;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      text-align: left;
    }

    .hero-inner {
      max-width: 55ch;
      margin: 0;
      animation: revealUp 0.7s ease both;
      text-align: left;
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      gap: 0.85rem;
    }

    .hero-actions .cta {
      width: 90%;
      text-align: center;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #d1e7ff;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    h1 {
      font-size: clamp(1.8rem, 6vw, 2.6rem);
      margin: 0;
      font-weight: 800;
    }
    .lead {
      max-width: 42ch;
      margin: 1rem auto 2rem;
      line-height: 1.5;
      font-size: 1.15rem;
      color: #e9f5ff;
    }
    .cta {
      display: inline-block;
      background: #198754;
      color: #fff;
      padding: 0.75rem 1.45rem;
      border-radius: 999px;
      font-weight: 700;
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
    }
    .cta:hover,
    .cta:focus-visible {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,.2);
      background: #145c42;
    }

    .cta.secondary {
      background: rgba(255, 255, 255, 0.16);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.32);
    }

    .cta.secondary:hover,
    .cta.secondary:focus-visible {
      background: rgba(255,255,255,0.24);
      color: #fff;
      border: 1px solid #fff;
    }

    .back-to-top {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      background: #0d6efd;
      border: 2px solid #fff;
      color: white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
      transition: transform 0.2s ease, background 0.2s ease;
      opacity: 0.95;
      font-size: 0.95rem;
    }

    .back-to-top:hover,
    .back-to-top:focus-visible {
      background: #145cda;
      transform: translateY(-2px);
    }

    @media (max-width: 920px) {
      .hero-layout {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero-actions {
        align-items: center;
      }

      .hero-inner {
        text-align: center;
      }
    }

    @keyframes revealUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    `
  ]
})
export class HeroComponent implements OnInit {
  showScrollTop = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.onWindowScroll();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTop = offset > 120;
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
