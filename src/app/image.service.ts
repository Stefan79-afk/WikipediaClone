import { Injectable } from '@angular/core';
import {empty} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  imgUrl: string = '';
  getImgUrl(url: string): void{
    this.imgUrl = url;
  }

  sendImgUrl(): string{
    return this.imgUrl;
  }
}
