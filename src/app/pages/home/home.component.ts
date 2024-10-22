import { Produto } from './../../interfaces/produto';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProdutoService } from '../../servicos/produto/produto.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  $produtos: Observable<Produto[]>;
  constructor(private produtoService: ProdutoService) {
    this.$produtos = this.produtoService.load();
  }

  redireciona(categoria: string) {
    var div = document.getElementById(categoria);
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  detalhar(id: number) {
    console.log(id);
  }
}
