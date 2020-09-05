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
  myRepo: any;

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","",0,0,"",new Date());
    this.repo = new Repo ("","","","");
  }

  userRequest(userName){
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
      this.http.get<ApiResponse>('https://api.github.com/users/'+userName+ '?access_token='+ environment.apiKey).toPromise().then(response=>{
        this.user.avatar_url = response.avatar_url;
        this.user.public_repos = response.public_repos;
        this.user.login = response.login;
        this.user.html_url = response.html_url;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.repos_url = response.repos_url;
        this.user.created_at = response.created_at;
        resolve();
      },
      error=>{
        reject()
      })
    })
    return promise
  }

  userRepos(userName){
    interface ApiResponse{
      html_url:string,
      name:string,
      repos_url:string,
      description:string,
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' +userName+ '/repos?order=created&sort=asc?access_token='+environment.apiKey).toPromise().then(response=>{
        this.myRepo=response;
        resolve();
      },error=> {
        reject();
      })
    })
    return promise;
  }

  // repoRequest(repoName){
  //   interface ApiResponse{
  //     name:string,
  //     repos_url:any,
  //     description:string,
  //     html_url:any
  //   }
  //   let promise= new Promise((resolve,reject)=>{
  //     this.http.get<ApiResponse>('https://api.github.com/search/repositories?q='+repoName+)
  //   })
  // }
}
