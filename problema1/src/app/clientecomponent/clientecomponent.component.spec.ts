import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientecomponentComponent } from './clientecomponent.component';

describe('ClientecomponentComponent', () => {
  let component: ClientecomponentComponent;
  let fixture: ComponentFixture<ClientecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientecomponentComponent]
    });
    fixture = TestBed.createComponent(ClientecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
