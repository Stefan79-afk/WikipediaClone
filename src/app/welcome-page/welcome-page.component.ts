import { Component, OnInit } from '@angular/core';
import {articles} from "../articles";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
  myArticles = articles;
  keys: string[] = Object.keys(this.myArticles);
  constructor() { }



  ngOnInit(): void {
  }

}
