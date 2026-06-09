import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../../data/portfolio';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './contact.html',
})
export class Contact {
  contact = CONTACT;

  form: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  isSending = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  async sendContact(event: Event): Promise<void> {
    event.preventDefault();

    this.successMessage.set('');
    this.errorMessage.set('');

    const name = this.form.name.trim();
    const email = this.form.email.trim();
    const message = this.form.message.trim();

    if (!name || !email || !message) {
      this.errorMessage.set('Preencha todos os campos antes de enviar.');
      return;
    }

    try {
      this.isSending.set(true);

      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        this.errorMessage.set(data.message || 'Não foi possível enviar a mensagem.');
        return;
      }

      this.successMessage.set(data.message || 'Mensagem enviada com sucesso.');

      this.form = {
        name: '',
        email: '',
        message: '',
      };
    } catch {
      this.errorMessage.set('Erro ao conectar com o servidor.');
    } finally {
      this.isSending.set(false);
    }
  }
}
