import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

/**
 * This Component is used to handle the login 
 */
export class LoginComponent {

    /**
     * Variables
     */
    public password: string;
    public userName: string;
    public errorMessage: string;

    /**
     * Constructor:
     * @param router
     * @param loginService
     */
    constructor(private router: Router, private loginService: LoginService) { }

    /**
     * Methods
     */

    /**
     * Method: login is used to handle the login of the user
     */
    public login(): void {
        this.loginService.loginUser(this.userName, this.password).subscribe(data => {

            if (data.success) { // success scenario
                localStorage.setItem('userName', this.userName);
                this.router.navigate(['dashboard/members']);
            } else { // failure scenario
                this.errorMessage = "Invalid credentials";
                this.userName = "";
                this.password = "";
                this.router.navigate(['login']);
            }
        });
    }
}

