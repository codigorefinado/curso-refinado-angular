import { GiphyService } from '../giphy.service';

describe('giphy.service-jasmine-mock.spec.ts', () => {

  let giphyService: GiphyService;
  let httpMock: any = jasmine.createSpyObj('http', [ 'get', 'post' ]);

  beforeEach(() => {
    giphyService = new GiphyService(httpMock);
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy', () => {
    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalled();
  });

});

