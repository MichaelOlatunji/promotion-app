import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-bard',
    templateUrl: './navbar.component.html',
    styles: [ 
        ` 
        .rock{background-color: navy; color: white}
        a.nav-link{color: white; ; font-size: 14px}
        a.nav-brand{color: white; font-size: 14px}
        navbar{color: white}

        .navbar-bg-color{
            background-color:"00042C" !important;
        }
        .navbar-custom { 
            background-color: lightgreen; 
        } 
        
        .navbar-custom {
            background-color: #ff5500;
        }
        a.nav-link{
            cursor: pointer;
        }
        `
    ]
})

export class NavBarComponent{

    constructor(private auth: AuthService, private router : Router){

    }

    Logout(){
       this.auth.logOut() 
       this.router.navigate(['/']);
    }
}