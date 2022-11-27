import { Component } from '@angular/core';
import { Article, News } from './interfaces/news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro';
  news?: Article[];

constructor(private _service: NewsService){

}

  ngOnInit(){
    let context = this;
    this._service.getProducts().subscribe( (news: News) => {
      context.news = news?.articles; 
      console.log(news);
    });
  }

}
