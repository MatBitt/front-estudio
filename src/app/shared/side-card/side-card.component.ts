import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ItemCarrinho } from '../../interfaces/item-carrinho';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CarrinhoService } from '../../servicos/carrinho/carrinho.service';

@Component({
  selector: 'app-side-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './side-card.component.html',
  styleUrl: './side-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideCardComponent {
  constructor(private carrinhoSerivce: CarrinhoService) {}
  @Output() buttonClicked = new EventEmitter<ItemCarrinho>();
  @Input() item: ItemCarrinho = {
    quantidade: 0,
    produto: {
      id: 0,
      titulo: '',
      descricao: '',
      imagem: '',
      preco: 0,
      categoria: '',
    },
  };

  remover() {
    this.carrinhoSerivce;
  }

  adicionar() {
    this.carrinhoSerivce;
  }
}
