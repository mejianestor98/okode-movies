import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieDetailsPage } from './movie-details.page';

describe('MovieDetailsPage', () => {
  let component: MovieDetailsPage;
  let fixture: ComponentFixture<MovieDetailsPage>;
  let fakeActivatedRoute = {
    snapshot: {
        paramMap: {
            get(): string {
                return 'tt8289930';
            },
        },
    },
}

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule],
      providers : [
        {
          provide : ActivatedRoute,
          useValue : fakeActivatedRoute
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
