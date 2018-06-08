import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tests-main',
  templateUrl: './main.component.html',
  host: {'class': 'tests-main'}
})
export class TestsMainComponent implements OnInit, OnDestroy{

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}