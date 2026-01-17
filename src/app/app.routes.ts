import { Routes } from '@angular/router';

import { Welcome } from './components/welcome/welcome';

import { Step10UserLogin } from './components/step10-user-login/step10-user-login';
import { Step11CreateUser } from './components/step11-create-user/step11-create-user';
import { authGuard } from './shared/guards/auth-guard';
import { adminRoleGuard } from './shared/guards/admin-role-guard';

import { Step12UsersDatatableShow } from './components/step12-users-datatable-show/step12-users-datatable-show';

import { ProfilePage } from './components/profile-page/profile-page';
import { NoAdminRole } from './components/no-admin-role/no-admin-role';

export const routes: Routes = [
  
  {path: 'login', component: Step10UserLogin},
  {path:'create', component: Step11CreateUser } ,
  {path:'users-datatable', component: Step12UsersDatatableShow, canActivate:[authGuard, adminRoleGuard]},
  
  {path:'profile-page', component: ProfilePage , canActivate:[authGuard]},
  {path:'welcome', component:Welcome},
  {path:'no-admin-role', component: NoAdminRole , canActivate:[authGuard]},
  {path:'', redirectTo:'welcome', pathMatch:'full'}
];