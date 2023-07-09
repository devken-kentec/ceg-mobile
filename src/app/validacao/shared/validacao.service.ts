import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  private readonly api = `${environment.api}/63617361646f656d707265656e6465646f72/api`;

  constructor(private http: HttpClient) {

  }

  findByCartao(codigo: string){
    return this.http.get(`${this.api}/cartoes/${codigo}`).pipe(
      take(1)
    );
  }

  findByEmpresaId(empresaId: number){
    return this.http.get(`${this.api}/descontos/calculo/${empresaId}`).pipe(
      take(1)
    );
  }
}
