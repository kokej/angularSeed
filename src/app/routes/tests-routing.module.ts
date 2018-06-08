import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAuthGuard } from '../auth-guards/default.service';

import { TestsNavComponent } from '../components/commons/navs/tests-nav/tests-nav.component';
import { TestsMainComponent } from '../components/tests/layout/main/main.component';
import { TestsOtherComponent } from '../components/tests/apps/other/other.component';
import { TestsBasicComponent } from '../components/tests/apps/basic/basic.component';


const testsRoutes: Routes = [
  {
    path: '',
    component: TestsMainComponent,
    canActivateChild: [DefaultAuthGuard],
    children: [
      {
        path: 'basic',
        component: TestsBasicComponent
      },
      {
        path: 'other',
        component: TestsOtherComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(testsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestsRoutingModule { }