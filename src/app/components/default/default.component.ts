import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  host: {'class': 'default-component'}
})
export class DefaultComponent implements OnInit, OnDestroy{

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}