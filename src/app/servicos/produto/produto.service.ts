import { inject, Injectable } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
