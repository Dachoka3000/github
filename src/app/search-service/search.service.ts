import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user-class/user';
import {Repo} from '../repo-class/repo';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  user:User;
  repo: Repo;

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","",0,0,"",new Date());
    
  }
}
