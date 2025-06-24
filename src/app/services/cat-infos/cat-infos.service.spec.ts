import { TestBed } from '@angular/core/testing';
import { CatInfosService } from './cat-infos.service';

describe('CatInfosService', () => {
  let service: CatInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
