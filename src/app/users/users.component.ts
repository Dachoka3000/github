import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search-service/search.service';
import {User} from '../user-class/user';
import {Repo} from '../repo-class/repo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User;
  repo: Repo;



  constructor(public searchService: SearchService) {}
  
  userRequest(userName){
    this.searchService.userRequest(userName).then((success)=>{
      this.user= this.searchService.user;
    },(error)=>{
      console.log(error)
    })
    this.searchService.userRepos(userName).then(
      (success)=>{
        this.repo= this.searchService.myRepo;
      },(error)=>{
        console.log(error);
      }
    )
  
    
  }
  
  

  ngOnInit(){
    this.userRequest("MachokaDaisy")
  }

}
