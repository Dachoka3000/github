import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userName:string;
  @Output() findUser = new EventEmitter<any>();

  search(){
    this.findUser.emit(this.userName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
