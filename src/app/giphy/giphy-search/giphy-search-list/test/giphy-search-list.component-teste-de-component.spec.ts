import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { GiphySearchListModule } from '../giphy-search-list.module';
import { GiphySearchListComponent } from '../giphy-search-list.component';
import { REQUESTGIPHY } from './request-giphy.stub';
import { By } from '@angular/platform-browser';

describe('giphy-search-list.component-teste-de-component.spec.ts', () => {

  let fixture: ComponentFixture<GiphySearchListComponent>;
  let component: GiphySearchListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ GiphySearchListModule ],
      declarations: []
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GiphySearchListComponent);
      component = fixture.componentInstance;

      component.gifs = REQUESTGIPHY.data;
      fixture.detectChanges();
    });
  }));

  it('Deve ter o a tag <a> com href defindo...', async(() => {
    let anchor: HTMLAnchorElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.href).toBe('http:\/\/giphy.com\/gifs\/cat-day-tomorrow-iuHaJ0D7macZq');
  }));

  it('Deve ter o a tag <img> com title defindo...', async(() => {
    let anchor: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(anchor.title).toBe('imagem iuHaJ0D7macZq');
  }));

  it('Deve ter o a tag <img> com src defindo...', async(() => {
    let anchor: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(anchor.src).toBe('http://i.giphy.com/iuHaJ0D7macZq.gif');
  }));


  it('Deve ter o a tag <img> com src defindo... pedando a tag pelo id', async(() => {
    let anchor: HTMLImageElement = fixture.debugElement.query(By.css('#imagem-gif')).nativeElement;
    expect(anchor.src).toBe('http://i.giphy.com/iuHaJ0D7macZq.gif');
  }));



});
/**
 * By.css('img') => Pega a tag img tag
 * By.css('#imagem-gif') => pega o elemento pelo id, use sempre que possível
 * By.css('a > img') => Pega a tag img mas navegando pela arvore indo da tag a para img, isso funciona relativo ao elemento que se está fazendo a query
 * By.css('.fa.fa-trash') => pega o elemento que tem a class .fa.fa-trash
 */
