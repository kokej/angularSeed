import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DefaultRoutingModule } from '../routes/default-routing.module';
import { DefaultAuthGuard } from '../auth-guards/default.service';
import { DefaultComponent } from '../components/default/default.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DefaultRoutingModule
  ],
  declarations: [
    DefaultComponent
  ],
  providers: [
    DefaultAuthGuard
  ]
})
export class DefaultModule {}