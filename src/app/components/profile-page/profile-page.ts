import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { RouterLink } from '@angular/router';
import { IUser } from '../../shared/interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [CommonModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit{
  
  users: IUser[] | undefined ;
  user: IUser |undefined ;
  loggedinuser: any;
  
  constructor(private userService: UserService) {}
  


ngOnInit(): void {
    this.loggedinuser = this.userService.user;
    console.log(this.loggedinuser());
    this.loadUsers();
    
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;      
        this.users.forEach(user => {
   console.log(user.username);
 });
   this.user = this.users?.find(u => u.username === this.loggedinuser()?.username);
   console.log(this.user?.username);
      },
      error: (err) => {
        console.error('Error fetching users', err);
      }
    });
    

  }
}
