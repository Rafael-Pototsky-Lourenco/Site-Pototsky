import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: false,
  
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  courses = [
    {
      name: 'Algoritmos e Lógica de Programação',
      institution: 'Udemy',
      tags: 'VisualG, C, C++, C#, Java, Python',
      conclusion: '02/07/2024',
      link: 'https://www.udemy.com/certificate/UC-2127afb7-73e9-44cc-be58-ab2a29bccb53/',
      image: '../../../assets/imagens/udemyLogo.png'
    },
    {
      name: 'C# Primeiros Passos',
      institution: 'Udemy',
      tags: 'C#',
      conclusion: '20/02/2024',
      link: 'https://www.udemy.com/certificate/UC-fa8146b1-7c6a-4688-bcd9-49ac28ec4735/',
      image: '../../../assets/imagens/udemyLogo.png'
    },
    {
      name: 'Curso Imersão DEV com Google Gemini',
      institution: 'Alura',
      tags: 'HTML, CSS, JavaScript',
      conclusion: '16/09/2024',
      link: 'https://cursos.alura.com.br/immersion/certificate/040d07da-241b-4981-8ed2-2f09ee8d7592',
      image: '../../../assets/imagens/aluraLogo.jpg'
    },
    {
      name: 'Curso de Informática - Básico ao Avançado',
      institution: 'Chosen',
      tags: 'Windows, Word, Excel, PowerPoint, Internet',
      conclusion: '15/06/2014',
      link: '',
      image: '../../../assets/imagens/chosenLogo.jpg'
    },
    {
      name: 'Curso de Criação de Games com Unity',
      institution: 'Chosen',
      tags: 'Unity, HTML',
      conclusion: '15/10/2019',
      link: '',
      image: '../../../assets/imagens/chosenLogo.jpg'
    },
    {
      name: 'Inglês - Básico ao Avançado',
      institution: 'Sesc/Senac',
      tags: 'Inglês',
      conclusion: '15/07/2019',
      link: '',
      image: '../../../assets/imagens/sescSenacLogo.jpg'
    },
  ]
}
