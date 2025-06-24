import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatInfosComponent } from './cat-infos.component';

describe('CatInfosComponent', () => {
  let component: CatInfosComponent;
  let fixture: ComponentFixture<CatInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
