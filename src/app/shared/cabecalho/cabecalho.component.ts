import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../servicos/carrinho/carrinho.service';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss',
})
export class CabecalhoComponent {
  private carrinhoService = inject(CarrinhoService);
  contagemCarrinho = this.carrinhoService.quantidadeTotal;
}
