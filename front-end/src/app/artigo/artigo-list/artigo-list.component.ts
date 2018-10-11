import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo.service';

@Component({
  selector: 'app-artigo-list',
  templateUrl: './artigo-list.component.html',
  styleUrls: ['./artigo-list.component.css']
})
export class ArtigoListComponent implements OnInit {

  public artigos: any;
  
  public colunasVisiveis: string[] = [
    'descricao',
    'tipo',
    'tamanho',
    'cor',
    'marca',
    'linha',
    'estado_conservacao',
    'conjunto',
    'data_compra',
    'valor_compra'
  ];
  
  // Injeção de dependência no parâmetro do construtor
  constructor(private artigoSrv: ArtigoService) { }

  ngOnInit() {
    // Chamando o service
    this.artigoSrv.listar().subscribe(
       dados => this.artigos = dados, // Callback do bem
       erro => console.error(erro) // Callback do mal
    );
  }

}
