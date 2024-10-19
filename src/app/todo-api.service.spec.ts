import { TestBed } from '@angular/core/testing';

import { TodoAPIService } from './todo-api.service';

describe('TodoAPIService', () => {
  let service: TodoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
