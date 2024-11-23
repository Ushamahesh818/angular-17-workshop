import { Component } from '@angular/core';
import * as usersData from './users.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent {
  userList:any=(usersData as any).default;
}
