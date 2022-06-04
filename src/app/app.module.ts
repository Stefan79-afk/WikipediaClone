import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ListDetailComponent } from './welcome-page/list-detail/list-detail.component';
import { CPUComponent } from './cpu/cpu.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { MotherboardComponent } from './motherboard/motherboard.component';
import { GPUComponent } from './gpu/gpu.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ListDetailComponent,
    CPUComponent,
    ImageViewerComponent,
    MotherboardComponent,
    GPUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
