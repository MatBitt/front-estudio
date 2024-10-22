import { Produto } from './../../interfaces/produto';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Output() buttonClicked = new EventEmitter<number>();
  @Input() produto: Produto = {
    id: 0,
    titulo: '',
    descricao: '',
    imagem: '',
    preco: 0,
    categoria: '',
  };

  onButtonClick() {
    this.buttonClicked.emit(this.produto.id);
  }
}
