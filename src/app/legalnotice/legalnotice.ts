import { Component } from '@angular/core';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-legalnotice',
  styleUrl: './legalnotice.scss',
  templateUrl: './legalnotice.html',
})
export class Legalnotice {
  content = {
    title: 'Legal notice',
    address: {
      heading: 'Information pursuant to § 5 DDG',
      lines: ['Neelimarani Bhupati', 'Angelbrechting', '85586 Poing', 'Germany'],
    },
    contact: {
      heading: 'Contact',
      emailLabel: 'Email:',
      email: 'your-email@example.com',
    },
    sections: [
      {
        title: 'Terms of use',
        paragraphs: [
          'This website serves as my personal portfolio. It is intended solely to showcase who I am, what I can do and the projects I have built. By visiting and using this site, you agree to the terms below.',
        ],
      },
      {
        title: 'Liability for content',
        paragraphs: [
          'I have put great effort into preparing the content of this website. Nevertheless, I cannot promise that all information is accurate, complete or current. As the operator, I am responsible for my own content under § 7 (1) DDG and applicable general laws.',
          'Under §§ 8 to 10 DDG, I have no duty to monitor third-party information that is transmitted or stored, nor to actively look for signs of unlawful activity. Once I learn of a concrete legal infringement, I will take down the affected content without delay.',
        ],
      },
      {
        title: 'Liability for links',
        paragraphs: [
          'This website includes links to external third-party sites (for example GitHub or LinkedIn). I have no control over what these sites contain, and their respective operators remain solely responsible for it. At the time the links were added, I saw no sign of any legal violation. Should I become aware of one, I will remove the link right away.',
        ],
      },
      {
        title: 'Copyright',
        paragraphs: [
          'All content, texts, graphics and projects that I created for this website are protected by German copyright law. Copying, modifying, sharing or any other use that goes beyond what copyright law permits requires my prior written permission. Any material not created by me belongs to its respective authors, and their rights are respected and credited accordingly.',
        ],
      },
      {
        title: 'Use of the projects',
        paragraphs: [
          'The projects and live demos on this site are sample applications made for learning and presentation purposes. Please do not enter any real or sensitive personal data. I cannot guarantee that the projects will stay online permanently or work without errors.',
        ],
      },
    ],
  };
}