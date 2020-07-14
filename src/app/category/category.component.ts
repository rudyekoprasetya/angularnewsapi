import { Component, OnInit } from '@angular/core';
// import RestapiService
import {RestapiService} from './../restapi.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
  		private api:RestapiService
  	) { }

  ngOnInit(): void {
  }

  dataSource: any=[];

  articles: any=[];

  category: string;

  getCat(category) {
    // console.log(category);
    this.api.category(category).subscribe(data=>{
      this.dataSource=data;
      this.articles=this.dataSource.sources;
      console.log(this.articles);
    }, error=>{
      console.log(error);
    })
  }
}
