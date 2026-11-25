import { Component } from '@angular/core';

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

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
  }
}
