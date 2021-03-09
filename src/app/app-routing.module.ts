import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'student-registration',
    loadChildren: () => import('./student-registration/student-registration.module').then( m => m.StudentRegistrationPageModule)
  },
  {
    path: 'registrationpage',
    loadChildren: () => import('./registrationpage/registrationpage.module').then( m => m.RegistrationpagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'studentresult',
    loadChildren: () => import('./studentresult/studentresult.module').then( m => m.StudentresultPageModule)
  },
  {
    path: 'classresult',
    loadChildren: () => import('./classresult/classresult.module').then( m => m.ClassresultPageModule)
  },
  {
    path: 'studentprofile',
    loadChildren: () => import('./studentprofile/studentprofile.module').then( m => m.StudentprofilePageModule)
  },
  {
    path: 'viewpage',
    loadChildren: () => import('./viewpage/viewpage.module').then( m => m.ViewpagePageModule)
  },
  {
    path: 'editpage',
    loadChildren: () => import('./editpage/editpage.module').then( m => m.EditpagePageModule)
  },
  {
    path: 'editstudentpage',
    loadChildren: () => import('./editstudentpage/editstudentpage.module').then( m => m.EditstudentpagePageModule)
  },
  {
    path: 'editclasspage',
    loadChildren: () => import('./editclasspage/editclasspage.module').then( m => m.EditclasspagePageModule)
  },
  {
    path: 'viewclasspage',
    loadChildren: () => import('./viewclasspage/viewclasspage.module').then( m => m.ViewclasspagePageModule)
  },
  {
    path: 'viewstudentpage',
    loadChildren: () => import('./viewstudentpage/viewstudentpage.module').then( m => m.ViewstudentpagePageModule)
  },
  {
    path: 'studentinfoview',
    loadChildren: () => import('./studentinfoview/studentinfoview.module').then( m => m.StudentinfoviewPageModule)
  },
  {
    path: 'studentinfoedit',
    loadChildren: () => import('./studentinfoedit/studentinfoedit.module').then( m => m.StudentinfoeditPageModule)
  },
  {
    path: 'editstudentresult',
    loadChildren: () => import('./editstudentresult/editstudentresult.module').then( m => m.EditstudentresultPageModule)
  },
  {
    path: 'addmarksstudent',
    loadChildren: () => import('./addmarksstudent/addmarksstudent.module').then( m => m.AddmarksstudentPageModule)
  },
  {
    path: 'addmarksclass',
    loadChildren: () => import('./addmarksclass/addmarksclass.module').then( m => m.AddmarksclassPageModule)
  },
  {
    path: 'editclassresult',
    loadChildren: () => import('./editclassresult/editclassresult.module').then( m => m.EditclassresultPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
