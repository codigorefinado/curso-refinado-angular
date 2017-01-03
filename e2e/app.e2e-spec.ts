import { MeuCursoRefinadoAngularPage } from './app.po';

describe('meu-curso-refinado-angular App', function() {
  let page: MeuCursoRefinadoAngularPage;

  beforeEach(() => {
    page = new MeuCursoRefinadoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works?');
  });
});
