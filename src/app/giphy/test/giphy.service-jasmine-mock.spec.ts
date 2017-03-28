import { GiphyService } from '../giphy.service';

describe('giphy.service-jasmine-mock.spec.ts', () => {

  let giphyService: GiphyService;
  let httpMock: any;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('http', [ 'get', 'post' ]);
    giphyService = new GiphyService(httpMock);
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy', () => {
    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalled();
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy com parametro', () => {
    const url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=2';
    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalledWith(url);
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy 1 vez', () => {
    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalledTimes(1);
  });


  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy nao chama post', () => {
    giphyService.pesquisarGiphy();
    expect(httpMock.post).toHaveBeenCalledTimes(0);
  });
});

