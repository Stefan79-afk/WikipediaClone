import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CPUComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  scrollToElement($element: HTMLElement): void{
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  url: string = '';
  ngOnInit(): void {
    this.imageService.getImgUrl(this.url)
  }

}
