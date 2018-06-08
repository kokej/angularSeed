import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAuthGuard } from '../auth-guards/default.service';
import { DefaultComponent } from '../components/default/default.component';

const defaultRoutes: Routes = [
    {
      path: '',
      component: DefaultComponent
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(defaultRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class DefaultRoutingModule {}