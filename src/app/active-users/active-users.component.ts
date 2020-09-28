import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.users = this.dataService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.dataService.setToInActive(id);
  }
}
