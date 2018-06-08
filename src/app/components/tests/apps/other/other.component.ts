import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tests-other',
  templateUrl: './other.component.html',
  host: {'class': 'tests-other'}
})
export class TestsOtherComponent implements OnInit, OnDestroy{

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}