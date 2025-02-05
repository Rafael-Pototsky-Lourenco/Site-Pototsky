import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  abouts = [
    {
      aboutMe: 'Entre dezembro de 2022 á junho de 2023, eu trabalhei como recepcionista no Hotel Caiobá, onde desempenhei funções de atendimento ao público, check-in e check-out de hóspedes, forneci informações e suporte para garantir uma estadia agradável aos clientes.',
      work: 'Hotel Caiobá',
      year: '2022',
      image: '../../../assets/imagens/dayOne.jpg',
    },
    {
      aboutMe: 'Entre julho de 2023 á dezembro de 2023, eu trabalhei no setor financeiro do Super Rede Atacadista, após receber uma promoção. Minhas responsabilidades incluíam o fechamento de caixa dos mercados, garantindo a precisão e organização dos registros financeiros.',
      work: 'Super Rede Atacadista',
      year: '2023',
      image: '../../../assets/imagens/promocao.png',
    },
    {
      aboutMe: 'Desde janeiro de 2024, após mudar de cidade, eu trabalho na área da computação na empresa Consilux Consultoria. Durante esse período, aprendi a lidar com C# e SQL Server e, atualmente, atuo como desenvolvedor FrontEnd, programando em Angular.',
      work: 'Consilux Consultoria',
      year: '2024',
      image: '../../../assets/imagens/TI.jpg',
    },
    {
      aboutMe: '',
      work: '',
      year: '',
      image: '../../../assets/imagens/jornadaContinua.png',
    }
  ]
}