import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TestsRoutingModule } from '../../routes/tests-routing.module';

import { TestsMainComponent } from '../../components/tests/layout/main/main.component';
import { TestsNavComponent } from '../../components/commons/navs/tests-nav/tests-nav.component';
import { TestHeaderComponent } from '../../components/tests/layout/header/header.component';

import { TestsBasicComponent } from '../../components/tests/apps/basic/basic.component';
import { TestsOtherComponent } from '../../components/tests/apps/other/other.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestsRoutingModule
  ],
  declarations: [
    TestsMainComponent,
    TestsNavComponent,
    TestHeaderComponent,
    TestsBasicComponent,
    TestsOtherComponent
  ],
  providers: []
})
export class TestsModule {}