import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  aboutContact: string = 'CONTATO';
  logoImage: string = '../../../assets/imagens/logoIaComFundo.png';
  cardName: string = 'Rafael Pototsky Lourenço';

  location: string = 'Localização:';
  locationText: string = 'Brasil, Curitiba / Paraná';

  email: string = 'E-Mail:';
  emailText: string = 'rafaelpototskylourenco10@gmail.com';

  bornDate: string = 'Nascimento:';
  bornDateText: string = '18/10/2004';

  age: string = 'Idade:';
  ageText: string = '20 Anos';

  separation: string = '--------------------------------------------';
  googleLink: string = 'mailto:rafaelpototskylourenco10@gmail.com?subject=Contato Website PototskyDev';
  linkedinLink: string = 'https://www.linkedin.com/in/rafael-pototsky-12b20b2a7/';
  instagramLink: string = 'https://www.instagram.com/rafa_pototsky/';
  githubLink: string = 'https://github.com/Rafael-Pototsky-Lourenco';
  
  copyright: string = 'Rafael Pototsky 2022-2025 . Todos os Direitos Reservados';
}
