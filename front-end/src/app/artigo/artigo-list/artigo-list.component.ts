import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo.service';
import { MatSnackBar } from '@angular/material';


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
    'valor_compra',
    'excluir'
  ];

  // Injeção de dependência no parâmetro do construtor
  constructor(
    private artigoSrv: ArtigoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // Chamando o service
    this.artigoSrv.listar().subscribe(
       dados => this.artigos = dados, // Callback do bem
       erro => console.error(erro) // Callback do mal
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este artigo?')) {
      this.artigoSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('Artigo excluído com sucesso', 'OK', { duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXCLUIR ARTIGO: ' + erro.message, 'OK')
      );
    }
  }

}
