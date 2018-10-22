import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoFormComponent } from './artigo-form.component';

describe('ArtigoFormComponent', () => {
  let component: ArtigoFormComponent;
  let fixture: ComponentFixture<ArtigoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
