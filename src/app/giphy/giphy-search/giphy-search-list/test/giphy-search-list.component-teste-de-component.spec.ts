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

  it('Deve ter o a tag a com id link-gif', async(() => {
    let anchor: HTMLAnchorElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.href).toBe('http:\/\/giphy.com\/gifs\/cat-day-tomorrow-iuHaJ0D7macZq');
  }));

});
