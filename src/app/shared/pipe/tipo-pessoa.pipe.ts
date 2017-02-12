import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tipoPessoa'
})

export class TipoPessoaPipe implements PipeTransform {
    transform(tipo: string): any {
      if('F' === tipo){
        return 'Pessoa física';
      }
      if('J' === tipo){
        return 'Pessoa jurídica';
      }

      return '';
    }
}
