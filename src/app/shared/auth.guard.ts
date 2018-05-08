import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

/**
 * This service is used as a guard to restrict un authorized access to any component
 */
@Injectable()
export class AuthGuard implements CanActivate {

    /**
     * Constructor:
     * @param router
     */
    constructor(private router: Router) { }

    /**
     * Methods
     */

    /**
     * Method: canActivate is used to guard a component if unauthorized user or someone directly access the application pages.
     */
    canActivate() {
        if (localStorage.getItem('userName')) {
            // Logged in so return true
            return true;
        }
        // Not logged in so redirect to login page and return false
        this.router.navigate(['login']);
        return false;
    }
}
