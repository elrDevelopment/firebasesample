import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheExampleComponent } from './cache-example.component';

describe('CacheExampleComponent', () => {
  let component: CacheExampleComponent;
  let fixture: ComponentFixture<CacheExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
