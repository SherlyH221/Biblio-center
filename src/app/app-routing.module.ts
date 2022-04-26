import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, PreloadAllModules, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';









const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'modal-details',
    loadChildren: () => import('./modal-details/modal-details.module').then( m => m.ModalDetailsPageModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then( m => m.ParentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
