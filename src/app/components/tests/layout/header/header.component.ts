import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'test-header',
  templateUrl: './header.component.html',
  host: {'class': 'tests-header'}
})
export class TestHeaderComponent implements OnInit, OnDestroy{

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}