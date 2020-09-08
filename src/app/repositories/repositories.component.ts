import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search-service/search.service';
import {Repo} from '../repo-class/repo';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repo: Repo;

  constructor(public repService:SearchService) { }

  repoRequest(userName){
    this.repService.repoRequest(userName).then((success)=>{
      this.repo= this.repService.newRepo;
    },(error)=>{
      console.log(error)
    })
  }
  ngOnInit() {
    this.repoRequest('MachokaDaisy')
  }

}
