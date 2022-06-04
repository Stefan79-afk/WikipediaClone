import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-gpu',
  templateUrl: 'gpu.component.html',
  styleUrls: ['gpu.component.css']
})
export class GPUComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  scrollToElement($element: HTMLElement): void{
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  url: string = '';
  ngOnInit(): void {
    this.imageService.getImgUrl(this.url)
  }

}
