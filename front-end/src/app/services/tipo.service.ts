import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/tipo');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/tipo/' + id);
  }

  novo(tipo) {
    return this.http.put('http://localhost:3000/tipo', tipo);
  }

  atualizar(tipo) {
    return this.http.patch('http://localhost:3000/tipo', tipo);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/tipo/' + id);
  }

}
