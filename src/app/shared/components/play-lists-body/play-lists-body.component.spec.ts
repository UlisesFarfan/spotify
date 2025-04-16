import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListsBodyComponent } from './play-lists-body.component';

describe('PlayListsBodyComponent', () => {
  let component: PlayListsBodyComponent;
  let fixture: ComponentFixture<PlayListsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayListsBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayListsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
