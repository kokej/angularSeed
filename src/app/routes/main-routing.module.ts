import { NgModule }              from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, CanActivate, NoPreloading } from '@angular/router';
import { MainComponent }         from '../components/main/main.component';
import { PageNotFoundComponent } from '../components/notfound/not-found.component';
import { DefaultAuthGuard } from '../auth-guards/default.service';

const appRoutes: Routes = [
    { path: 'home', component: MainComponent },
    { 
      path: 'default', 
      loadChildren: '../modules/default.module#DefaultModule', 
      canActivate: [DefaultAuthGuard]
    },
    { 
      path: 'tests', 
      loadChildren: '../modules/tests/tests.module#TestsModule',
      canLoad: [DefaultAuthGuard]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: NoPreloading
        // enableTracing: true // <-- debugging purposes only
      }
      )
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}