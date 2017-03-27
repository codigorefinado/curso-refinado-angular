import { CodigoRefinadoAngularPage } from './app.po';

describe('codigo-refinado-angular App', () => {
  let page: CodigoRefinadoAngularPage;

  beforeEach(() => {
    page = new CodigoRefinadoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
