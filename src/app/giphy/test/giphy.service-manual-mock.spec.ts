import { GiphyService } from '../giphy.service';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';

describe('giphy.service-manual-mock.spec.ts', () => {

  let giphyService: GiphyService;
  let httpMock: HttpMock;

  beforeEach(() => {
    httpMock = new HttpMock(null, null);

    giphyService = new GiphyService(httpMock);
  });

  it('Verifica se foi chamado o get dentro do giphyService.pesquisaGiphy', () => {
    spyOn(httpMock, 'get');
    giphyService.pesquisarGiphy();
    expect(httpMock.get).toHaveBeenCalled();
  });

});

class HttpMock extends Http {

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.of(null);
  }

}
