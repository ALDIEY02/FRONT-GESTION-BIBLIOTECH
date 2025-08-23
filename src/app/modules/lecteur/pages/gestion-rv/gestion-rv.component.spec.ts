import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRvComponent } from './gestion-rv.component';

describe('GestionRvComponent', () => {
  let component: GestionRvComponent;
  let fixture: ComponentFixture<GestionRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionRvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
