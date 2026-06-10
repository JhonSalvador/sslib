import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../../data/portfolio';

type ContactForm = {
  name: string;
  email: string;
  message: string;
  botField: string;
};

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = CONTACT;

  form: ContactForm = {
    name: '',
    email: '',
    message: '',
    botField: '',
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

      const formData = new URLSearchParams();

      formData.append('form-name', 'contact');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('bot-field', this.form.botField);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        this.errorMessage.set('Não foi possível enviar a mensagem.');
        return;
      }

      this.successMessage.set('Mensagem enviada com sucesso.');

      this.form = {
        name: '',
        email: '',
        message: '',
        botField: '',
      };
    } catch {
      this.errorMessage.set('Erro ao enviar mensagem.');
    } finally {
      this.isSending.set(false);
    }
  }
}