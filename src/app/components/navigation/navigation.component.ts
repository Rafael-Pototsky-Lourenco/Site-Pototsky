import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  aboutMe1: string = 'Entre dezembro de 2022 á junho de 2023, eu trabalhei como recepcionista no Hotel Caiobá, onde desempenhei funções de atendimento ao público, check-in e check-out de hóspedes, forneci informações e suporte para garantir uma estadia agradável aos clientes.';
  work1: string = 'Hotel Caiobá';
  year1: number = 2022;

  aboutMe2: string = 'Entre julho de 2023 á dezembro de 2023, eu trabalhei no setor financeiro do Super Rede Atacadista, após receber uma promoção. Minhas responsabilidades incluíam o fechamento de caixa dos mercados, garantindo a precisão e organização dos registros financeiros.';
  work2: string = 'Super Rede Atacadista';
  year2: number = 2023;

  aboutMe3: string = 'Desde janeiro de 2024, após mudar de cidade, eu trabalho na área da computação na empresa Consilux Consultoria. Durante esse período, aprendi a lidar com C# e SQL Server e, atualmente, atuo como desenvolvedor FrontEnd, programando em Angular.';
  work3: string = 'Consilux Consultoria';
  year3: number = 2024;
  
}
