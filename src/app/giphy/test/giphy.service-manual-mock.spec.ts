import { GiphyService } from '../giphy.service';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('giphy.service-manual-mock.spec.ts', () => {
  let giphyService: GiphyService;
  let httpMock: HttpFake;

  beforeEach(() => {
    httpMock = new HttpFake(null, null);

    giphyService = new GiphyService(httpMock);
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy', () => {
    spyOn(httpMock, 'get');

    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalled();
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy com parametro', () => {
    spyOn(httpMock, 'get');

    const url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=2';
    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalledWith(url);
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy 1 vez', () => {
    spyOn(httpMock, 'get');

    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalledTimes(1);
  });

});

class HttpFake extends Http {
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.of(null);
  }
}
