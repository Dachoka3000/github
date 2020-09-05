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
  userName: any;

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","",0,0,"",new Date());
    this.repo = new Repo ("","","","");
  }

  userRequest(){
    interface ApiResponse{
      name:string,
      avatar_url:any,
      public_repos:any,
      login: string,
      html_url:any,
      followers:number,
      following: number,
      repos_url:any,
      created_at:Date,
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+this.userName+ '?access_token='+ environment.apiKey).toPromise().then(response=>{
        this.user.avatar_url = response.avatar_url;
        this.user.public_repos = response.public_repos;
        this.user.login = response.login;
        this.user.html_url = response.html_url;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.following = response.following;
        this.user.created_at = response.created_at;
      })
    })
  }
}
