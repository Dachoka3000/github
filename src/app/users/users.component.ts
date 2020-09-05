import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search-service/search.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( searchService: SearchService,private http:HttpClient) { }

  ngOnInit(): void {
  }

}
