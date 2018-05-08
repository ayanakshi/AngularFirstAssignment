import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

/**
 * This Component shows the navigation bar for different components like members, reporting etc
 */
export class NavComponent implements OnInit {

  /**
   * Variables
   */

  // Variable to hold the current logged in user name
  public currentUserName = '';


  /**
   * Constructor:
   */
  constructor(private router: Router) { }

  /**
   * Methods
   */

  /**
   * Method: ngOnInit is called during component initialization
   */
  ngOnInit() {
    if (localStorage.getItem('userName')) {
      const loggedInUser = localStorage.getItem('userName');;
      this.currentUserName = loggedInUser;
    }
  }

  /**
   * Method: logout is used to handle logout of the user
   */
  public logout(): void {
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }
}
