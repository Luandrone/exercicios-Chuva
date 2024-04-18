import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandirTopicoComponent } from './expandir-topico.component';

describe('ExpandirTopicoComponent', () => {
  let component: ExpandirTopicoComponent;
  let fixture: ComponentFixture<ExpandirTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandirTopicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandirTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
