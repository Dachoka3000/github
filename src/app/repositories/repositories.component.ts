import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search-service/search.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(searchService:SearchService) { }

  ngOnInit(): void {
  }

}
