import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtigoService } from '../../services/artigo.service';

@Component({
  selector: 'app-artigo-form',
  templateUrl: './artigo-form.component.html',
  styleUrls: ['./artigo-form.component.css']
})
export class ArtigoFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private artigoSrv: ArtigoService
  ) { }

  public titulo: String = 'Novo artigo';
  public artigo: any = {}; // Objeto vazio

  ngOnInit() {
    
    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if(params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.artigoSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.artigo = obj;
              console.log(obj);
              this.titulo = 'Editar artigo';
            },
            erro => console.error(erro) // Callback se erro 
          )
        }
      }
    );

  }

}
