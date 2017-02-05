/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';

describe('AppComponent', () => {
  let config: Route[] = [
    { path: '', component: AppComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule, RouterTestingModule.withRoutes(config)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
