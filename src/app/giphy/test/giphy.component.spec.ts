/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GiphyComponent} from '../giphy.component';
import {GiphyService} from '../giphy.service';
import {HttpModule} from '@angular/http';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [GiphyComponent],
      providers: [GiphyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
