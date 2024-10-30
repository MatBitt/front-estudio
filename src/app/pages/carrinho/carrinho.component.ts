import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../../servicos/carrinho/carrinho.service';
import { TituloComponent } from '../../shared/titulo/titulo.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SideCardComponent } from '../../shared/side-card/side-card.component';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    TituloComponent,
    RouterLink,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    SideCardComponent
],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss',
})
export class CarrinhoComponent {
  private carrinhoService = inject(CarrinhoService);
  contagemCarrinho = this.carrinhoService.quantidadeTotal;
  total = this.carrinhoService.valorTotal;
  carrinho = this.carrinhoService.itensCarrinho();

  irAsCompras() {}
}
