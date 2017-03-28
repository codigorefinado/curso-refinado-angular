import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipopessoa'
})
export class TipoPessoaPipe implements PipeTransform {
  transform(tipo: string): string {
    if ( 'F' === tipo ) {
      return 'Pessoa física';
    }
    if ( 'J' === tipo ) {
      return 'Pessoa jurídica';
    }

    return '';
  }
}
