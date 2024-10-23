import { inject, Injectable } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly API = `api/produto`;
  private http = inject(HttpClient);

  load(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  create(produto: Partial<Produto>): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  mock(): Observable<Produto[]> {
    const produtos: Produto[] = [
      {
        id: 1,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 2,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 3,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 4,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 5,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 6,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 7,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 8,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 9,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 10,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 11,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 12,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'planner',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 13,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'adesivo',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 14,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'adesivo',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
      {
        id: 15,
        titulo: 'oi',
        descricao: 'desc',
        categoria: 'adesivo',
        imagem: 'assets/plannergato1.jpg',
        preco: 40.90
      },
  ];
    return of(produtos);
  }
}
