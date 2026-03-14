import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2>Contact</h2>
        <p class="subtext">Let's build something together.</p>
        <form class="contact-form" (ngSubmit)="submit(contactForm)" #contactForm="ngForm">
          <label>
            Name
            <input name="name" ngModel placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" ngModel placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" ngModel placeholder="Your message" rows="5" required></textarea>
          </label>
          <button type="submit" [disabled]="contactForm.invalid">Send Message</button>
        </form>
        <div class="socials">
          <a href="https://www.linkedin.com/in/kishan-malviya-3932411ba/" target="_blank" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/Kishan-Malviya" target="_blank" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .contact-section {
      background: #f8f9fa;
      padding: 4rem 1.25rem;
      color: #212529;
    }
    .container {
      max-width: 680px;
      margin: 0 auto;
      animation: revealUp 0.7s ease both;
    }
    .subtext { color: #6c757d; margin-bottom: 1.1rem; }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    label {
      display: flex;
      flex-direction: column;
      font-weight: 600;
      color: #495057;
      gap: 0.4rem;
    }
    input, textarea {
      border: 1px solid #ced4da;
      border-radius: 0.5rem;
      padding: 0.65rem 0.8rem;
      font-family: inherit;
      resize: vertical;
    }
    button {
      margin-top: 0.7rem;
      align-self: flex-start;
      background: #198754;
      border: none;
      color: #fff;
      border-radius: 0.6rem;
      font-weight: 700;
      padding: 0.65rem 1.1rem;
      transition: background 0.2s, transform 0.2s;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
    button:not(:disabled):hover { background: #145c42; transform: translateY(-1px); }
    .socials {
      margin-top: 1.5rem;
      display: flex;
      gap: 0.8rem;
      justify-content: center;
    }
    .socials a {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      border: 1px solid #0d6efd;
      background: #fff;
      padding: 0.45rem 0.7rem;
      border-radius: 0.5rem;
      transition: all 0.2s;
    }
    .socials a:hover { background: #0d6efd; color: #fff; }
    `
  ]
})
export class ContactComponent {
  submit(form: any) {
    if (!form || !form.valid) {
      return;
    }

    const { name, email, message } = form.value;
    const subject = encodeURIComponent('Portfolio Contact Request');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:er.kishan.malviya@gmail.com?subject=${subject}&body=${body}`;

    form.resetForm();
  }
}
