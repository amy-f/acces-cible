/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThePageComponent } from './the-page.component';

describe('ThePageComponent', () => {
  let component: ThePageComponent;
  let fixture: ComponentFixture<ThePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
