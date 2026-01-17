import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css',
})
export class ListGroupMenu {

  menu = [
    
    {text: "Log In", link: 'login'},
    {text: "Sign Up", link:'create'},
    {text: "My Profile", link:'profile-page'},
    {text: "Show Users", link:'users-datatable'}
    
    
  ]

}
