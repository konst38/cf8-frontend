import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles: string[] | undefined = userService.user()?.roles;
  const hasPermision = userRoles?.some((r:string) => r==="ADMIN");

  if (userService.user() && hasPermision) {
    return true;
  }

  return router.navigate(['no-admin-role']);
};
