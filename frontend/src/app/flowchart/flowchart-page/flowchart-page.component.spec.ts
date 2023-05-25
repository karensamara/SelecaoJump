import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowchartPageComponent } from './flowchart-page.component';

describe('FlowchartPageComponent', () => {
  let component: FlowchartPageComponent;
  let fixture: ComponentFixture<FlowchartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowchartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowchartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
