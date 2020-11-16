import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscapokemonComponent } from './buscapokemon.component';

describe('BuscapokemonComponent', () => {
  let component: BuscapokemonComponent;
  let fixture: ComponentFixture<BuscapokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscapokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscapokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
