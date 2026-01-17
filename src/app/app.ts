import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { ListGroupMenu } from './components/list-group-menu/list-group-menu';
import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    ListGroupMenu

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
