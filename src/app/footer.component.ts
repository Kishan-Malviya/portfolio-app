import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© 2026 Kishan Malviya. All Rights Reserved.</p>
    </footer>
  `,
  styles: [
    `
    .footer {
      background: #212529;
      color: #e9ecef;
      padding: 1.25rem;
      text-align: center;
    }
    .footer-links {
      margin-top: 0.6rem;
      display: flex;
      gap: 0.8rem;
      justify-content: center;
    }
    .footer-links a {
      color: #adb5bd;
      text-decoration: none;
      font-weight: 600;
    }
    .footer-links a:hover { color: #fff; }
    `
  ]
})
export class FooterComponent {}
