import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  name: string = 'Rafael Pototsky';
  about: string = 'Sobre';
  courses: string = 'Cursos';
  contact: string = 'Contato';
  welcome: string = 'Bem Vindo!';
  website: string = 'Aproveite meu Site!';
  aboutMe: string = 'Sobre Mim';
}
