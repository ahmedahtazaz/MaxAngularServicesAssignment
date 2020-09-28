import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.users = this.dataService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.dataService.setToActive(id);
  }
}
