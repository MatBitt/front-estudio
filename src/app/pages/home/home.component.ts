import { Produto } from './../../interfaces/produto';
import { map, Observable } from 'rxjs';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProdutoService } from '../../servicos/produto/produto.service';
import { CardComponent } from '../../shared/card/card.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TituloComponent } from "../../shared/titulo/titulo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CommonModule, CardComponent, ModalComponent, TituloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  produtos$: Observable<Produto[]>;
  categorias$: Observable<string[]>;

  readonly dialog = inject(MatDialog);

  constructor(private produtoService: ProdutoService) {
    this.produtos$ = this.produtoService.load();
    this.categorias$ = this.produtos$.pipe(
      map(produtos => {
        return produtos.map(p => p.categoria);
      })
    );
  }

  redireciona(categoria: string) {
    var div = document.getElementById(categoria);
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  detalhar(produto: Produto) {
    this.dialog.open(ModalComponent, { data: produto });
    console.log(produto.id);
  }
}
