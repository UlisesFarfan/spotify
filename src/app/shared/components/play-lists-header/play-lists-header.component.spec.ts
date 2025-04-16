import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListsHeaderComponent } from './play-lists-header.component';

describe('PlayListsHeaderComponent', () => {
  let component: PlayListsHeaderComponent;
  let fixture: ComponentFixture<PlayListsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayListsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayListsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
