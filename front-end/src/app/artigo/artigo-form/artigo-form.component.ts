import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtigoService } from '../../services/artigo.service';
import { TipoService } from '../../services/tipo.service';
import { TamanhoService } from '../../services/tamanho.service';
import { LinhaService } from '../../services/linha.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-artigo-form',
  templateUrl: './artigo-form.component.html',
  styleUrls: ['./artigo-form.component.css']
})
export class ArtigoFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private artigoSrv: ArtigoService,
    private tipoSrv: TipoService,
    private tamanhoSrv: TamanhoService,
    private linhaSrv: LinhaService,
    private snackBar: MatSnackBar
  ) { }

  public titulo: String = 'Novo artigo';

  public artigo: any = {conjunto: false};

  public tipos: any = []; // Vetor vazio
  public tamanhos: any = [];
  public linhas: any = [];

  ngOnInit() {

    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.artigoSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.artigo = obj;
              console.log(obj);
              this.titulo = 'Editar artigo';
            },
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    this.tipoSrv.listar().subscribe(
      dados => {
        this.tipos = dados;
        console.log(dados);
      },
      erro => console.error(erro)
    );

    this.tamanhoSrv.listar().subscribe(
      dados => {
        this.tamanhos = dados;
        console.log(dados);
      },
      erro => console.error(erro)
    );

    this.linhaSrv.listar().subscribe(
      dados => {
        this.linhas = dados;
        console.log(dados);
      },
      erro => console.error(erro)
    );

  }

  salvar() {
    let retorno: any;
    if (this.artigo._id) {
      retorno = this.artigoSrv.atualizar(this.artigo);
    } else {
      retorno = this.artigoSrv.novo(this.artigo);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('Artigo salvo com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['artigo']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar o artigo: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  cancelar() {
    if (confirm('Deseja realmente cancelar as alterações?')) {
      this.router.navigate(['artigo']);
    }
  }


}
