import { ItemCarrinho } from './../../interfaces/item-carrinho';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Produto } from '../../interfaces/produto';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../servicos/carrinho/carrinho.service';
import { MatIconModule } from '@angular/material/icon';
import { QuebraDeLinhaPipe } from '../pipes/quebra-de-linha/quebra-de-linha.pipe';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatIconModule,
    MatDialogClose,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    QuebraDeLinhaPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  quantidade: number;
  produto: Produto = inject(MAT_DIALOG_DATA);

  constructor(private carrinho: CarrinhoService) {
    this.quantidade = this.buscarQuantidade();
  }

  buscarQuantidade(): number {
    const item = this.carrinho
      .itensCarrinho()
      .find((item) => item.produto.id === this.produto.id);
    return item ? item.quantidade : 0;
  }

  diminui() {
    this.quantidade == 0 ? null : this.quantidade--;
  }

  aumenta() {
    this.quantidade++;
  }

  adciona() {
    const item: ItemCarrinho = {
      produto: this.produto,
      quantidade: this.quantidade,
    };
    this.carrinho.updateCartQuantity(item);
  }
}
