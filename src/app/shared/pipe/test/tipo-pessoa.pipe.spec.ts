import { TipoPessoaPipe } from '../tipo-pessoa.pipe';

describe('tipo-pessoa.pipe.spec.ts', () => {

  let tipoPessoaPipe: TipoPessoaPipe = new TipoPessoaPipe();

  it('Deveria ser pessoa física', () => {
      expect(tipoPessoaPipe.transform('F')).toEqual('Pessoa física');
  });

  it('Deveria ser pessoa jurídica', () => {
    expect(tipoPessoaPipe.transform('J')).toEqual('Pessoa jurídica');
  });

  it('Deveria ser ', () => {
    expect(tipoPessoaPipe.transform('X')).toEqual('');
  });
});
