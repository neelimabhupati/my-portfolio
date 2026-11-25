import { Component } from '@angular/core';

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
  imports: [],
  selector: 'app-contact-me',
  styleUrl: './contact-me.scss',
  templateUrl: './contact-me.html',
})
export class ContactMe {
  readonly content = {
    eyebrow: 'CONTACT ME',
    title: 'Ready to work together?',
    paragraphs: [
      'I enjoy building accessible, responsive web experiences. If you have a project or role in mind, tell me a little about it.',
      'I’d be happy to discuss how my experience and skills could contribute to your team.',
    ],
    nameLabel: 'What’s your name?',
    namePlaceholder: 'Your name goes here',
    emailLabel: 'What’s your email?',
    emailPlaceholder: 'youremail@email.com',
    messageLabel: 'How can I help you?',
    messagePlaceholder: 'Tell me a little about your project...',
    consent: 'I agree that my details can be used to respond to this message.',
    sendLabel: 'Send',

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
