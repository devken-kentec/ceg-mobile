import { ValidacaoService } from './shared/validacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.page.html',
  styleUrls: ['./validacao.page.scss'],
})
export class ValidacaoPage implements OnInit {

  calcular = false;
  usuario: string;
  empresa: string;
  statusCartao: string;
  validade: string;
  desconto: number;
  milha: number;
  valorDesconto: any;

  validacaoForm = this.fb.group({
    codigo:['',[]],
    valor: ['', []]
  });

  constructor(private fb: FormBuilder,
              private validacaoService: ValidacaoService) { }

  ngOnInit() {

  }

  validar(){

    const codigo = this.validacaoForm.value.codigo;
    this.validacaoService.findByCartao(codigo).subscribe((dados: any)=>{
        this.usuario = dados.usuario;
        this.validade = dados.validade;
        this.statusCartao = dados.statusCartao;
        this.empresa = dados.empresa;
        this.buscarDesconto(2);
        this.calcular = true;
    });
  }

  buscarDesconto(empresaId: number){
    this.validacaoService.findByEmpresaId(empresaId).subscribe((desc: any)=>{
        this.desconto = desc.desconto;
        this.milha = desc.milhas;
    });
  }

  calcularDesconto(){
    const valor: number = this.validacaoForm.value.valor;
    const desconto: number = this.desconto;
    const valorDoDesconto = valor * (desconto/100);
    const valorComDesconto = valor - valorDoDesconto;
    this.valorDesconto = valorComDesconto.toFixed(2);
  }

}
