import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tests-basic',
  templateUrl: './basic.component.html',
  host: {'class': 'basic-component'}
})
export class TestsBasicComponent implements OnInit, OnDestroy{

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}