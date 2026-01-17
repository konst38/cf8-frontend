import { Component , OnInit} from '@angular/core';
import { Step12UsersDatatable } from '../step12-users-datatable/step12-users-datatable';
import { IUser } from '../../shared/interfaces/user';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-step12-users-datatable-show',
  imports: [Step12UsersDatatable],
  templateUrl: './step12-users-datatable-show.html',
  styleUrl: './step12-users-datatable-show.css',
})
export class Step12UsersDatatableShow implements OnInit{
  users: IUser[] | undefined ;

constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      this.users = user;
    });

  }
}
