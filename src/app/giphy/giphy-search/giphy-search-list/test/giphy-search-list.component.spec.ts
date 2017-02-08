import { GiphySearchListComponent } from '../giphy-search-list.component';

describe('giphy-search-list.component.spec.ts', () => {

  let giphySearchList: GiphySearchListComponent;

  beforeEach(() => {
    giphySearchList = new GiphySearchListComponent();
  });


  it('Verifica se a variável gifs foi inicializada', () => {
    expect(JSON.stringify(giphySearchList.gifs)).toBe(JSON.stringify([]));

    expect(giphySearchList.gifs).not.toBeNull();
    expect(giphySearchList.gifs.length).toBe(0);

  });

});
