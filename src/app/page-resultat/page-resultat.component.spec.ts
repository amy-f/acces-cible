/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageResultatComponent } from './page-resultat.component';

describe('PageResultatComponent', () => {
  let component: PageResultatComponent;
  let fixture: ComponentFixture<PageResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
