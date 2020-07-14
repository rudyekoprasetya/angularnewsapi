import { Component } from '@angular/core';
// import RestapiService
import {RestapiService} from './restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  constructor(
    private api:RestapiService
    ) {
    //inisialiasasi fungsi
    this.getData();
  }
  

  title = 'newsapi';

  dataSource: any=[];

  articles: any=[];

  category: string;
    
  getData() {
    this.api.headline().subscribe(data=>{
      this.dataSource=data;
      this.articles=this.dataSource.articles;
      // console.log(this.articles);
    }, error=>{
      // console.log(error);
    })
  }

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
