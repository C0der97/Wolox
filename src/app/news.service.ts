import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './interfaces/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<News> {
    return this.http.get<News>("https://newsapi.org/v2/top-headlines?country=co&apiKey=07f77b5890004b1091b50d85232c6e0f");
  }
}
