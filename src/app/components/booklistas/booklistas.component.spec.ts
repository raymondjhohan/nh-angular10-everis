import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistasComponent } from './booklistas.component';

describe('BooklistasComponent', () => {
  let component: BooklistasComponent;
  let fixture: ComponentFixture<BooklistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
