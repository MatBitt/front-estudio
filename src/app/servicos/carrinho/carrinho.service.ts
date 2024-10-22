import { computed, effect, Injectable, signal } from '@angular/core';
import { ItemCarrinho } from '../../interfaces/item-carrinho';
import { Produto } from '../../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itensCarrinho = signal<ItemCarrinho[]>([]);

  quantidadeTotal = computed(() => this.itensCarrinho().reduce((acc, atual) => acc + atual.quantidade, 0));

  valorTotal = computed(() => this.itensCarrinho().reduce((acc, atual) => acc + (atual.quantidade * atual.produto.preco), 0));

  e = effect(() => console.log('quantidadeTotal atualizada:', this.quantidadeTotal()));
  i = effect(() => console.log('itensCarrinho atualizada:', this.itensCarrinho()));

  addProduto(produto: Produto): void {
    const indexFound = this.itensCarrinho().findIndex((p) => p.produto.id === produto.id);
    if (indexFound >= 0) {
      const item = this.itensCarrinho()[indexFound];
      item.quantidade += 1;
      this.updateCartQuantity(item);
    } else {
      this.itensCarrinho.update((itens) => [...itens, { produto, quantidade: 1 }]);
    }
  }

  updateCartQuantity(item: ItemCarrinho): void {
    const indexFound = this.itensCarrinho().findIndex((p) => p.produto.id === item.produto.id);
    if (indexFound >= 0) {
      this.itensCarrinho.update((itens) => itens.map((p) => p.produto.id === item.produto.id ? item : p));
    }
  }

  removeProduto(produto: Produto): void {
    this.itensCarrinho.update((itens) => itens.filter((p) => p.produto.id !== produto.id));
  }
}
