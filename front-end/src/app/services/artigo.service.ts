import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/artigo');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/artigo/' + id);
  }

  novo(artigo) {
    return this.http.put('http://localhost:3000/artigo', artigo);
  }

  atualizar(artigo) {
    return this.http.patch('http://localhost:3000/artigo', artigo);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/artigo/' + id);
  }

}
