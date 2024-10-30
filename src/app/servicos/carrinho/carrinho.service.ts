import { computed, effect, Injectable, signal } from '@angular/core';
import { ItemCarrinho } from '../../interfaces/item-carrinho';
import { Produto } from '../../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itensCarrinho = signal<ItemCarrinho[]>([
    {
      quantidade: 2,
      produto: {
        id: 1,
        titulo: 'Planner Gatinhos - não datado mais uma linha de',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 2,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 3,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 4,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 5,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 6,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 7,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 8,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 9,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
    {
      quantidade: 2,
      produto: {
        id: 10,
        titulo: 'Oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 64.90
      }
    },
  ]);

  quantidadeTotal = computed(() =>
    this.itensCarrinho().reduce((acc, atual) => acc + atual.quantidade, 0)
  );

  valorTotal = computed(() =>
    this.itensCarrinho().reduce(
      (acc, atual) => acc + atual.quantidade * atual.produto.preco,
      0
    )
  );

  e = effect(() =>
    console.log('quantidadeTotal atualizada:', this.quantidadeTotal())
  );
  i = effect(() =>
    console.log('itensCarrinho atualizada:', this.itensCarrinho())
  );

  addProduto(produto: Produto): void {
    const indexFound = this.itensCarrinho().findIndex(
      (p) => p.produto.id === produto.id
    );
    if (indexFound >= 0) {
      const item = this.itensCarrinho()[indexFound];
      item.quantidade += 1;
      this.updateCartQuantity(item);
    } else {
      this.itensCarrinho.update((itens) => [
        ...itens,
        { produto, quantidade: 1 },
      ]);
    }
  }

  updateCartQuantity(item: ItemCarrinho): void {
    const indexFound = this.itensCarrinho().findIndex(
      (p) => p.produto.id === item.produto.id
    );
    if (indexFound >= 0) {
      this.itensCarrinho.update((itens) =>
        itens.map((p) => (p.produto.id === item.produto.id ? item : p))
      );
    } else {
      console.log('Entrei no update inexistente');
      this.addProduto(item.produto);
      this.updateCartQuantity(item);
    }
  }

  removeProduto(produto: Produto): void {
    this.itensCarrinho.update((itens) =>
      itens.filter((p) => p.produto.id !== produto.id)
    );
  }
}
