import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type ContactResponse = {
  success?: boolean;
  error?: string;
};

function isContactResponse(value: unknown): value is ContactResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    (!('success' in value) || typeof value.success === 'boolean') &&
    (!('error' in value) || typeof value.error === 'string')
  );
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-contact-me',
  styleUrl: './contact-me.scss',
  templateUrl: './contact-me.html',
})
export class ContactMe {
  readonly content = {
    eyebrow: 'contact.eyebrow',
    title: 'contact.title',
    paragraphs: ['contact.paragraph1', 'contact.paragraph2'],
    nameLabel: 'contact.nameLabel',
    namePlaceholder: 'contact.namePlaceholder',
    emailLabel: 'contact.emailLabel',
    emailPlaceholder: 'contact.emailPlaceholder',
    messageLabel: 'contact.messageLabel',
    messagePlaceholder: 'contact.messagePlaceholder',
    consent: 'contact.consent',
    sendLabel: 'contact.sendLabel',

  };

  readonly assets = {
    sticker:
      '/images/03_Stickers/00_Round/01_Color%20option%201-%20Orange.png',
    stickerLogo: '/icons/letter-n.png',
    arrow:
      '/icons/00_Hand-drawn%20lines/05_Contact/Color%20option%202.png',

  };

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    try {
      const response = await fetch('http://localhost:8000/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result: unknown = await response.json();

      if (!isContactResponse(result)) {
        throw new Error('PHP endpoint nunchi valid response raledu.');
      }

      if (!response.ok || result.success !== true) {
        throw new Error(result.error ?? `Request failed: ${response.status}`);
      }

      console.info('PHP contact endpoint request accept chesindi.');
    } catch (error) {
      console.error('Contact form submit failed:', error);
    }
  }
}
