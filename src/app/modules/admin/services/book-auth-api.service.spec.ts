import { TestBed } from '@angular/core/testing';

import { BookAuthApiService } from './book-auth-api.service';

describe('BookAuthApiService', () => {
  let service: BookAuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAuthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
