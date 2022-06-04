import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {CPUComponent} from "./cpu/cpu.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {MotherboardComponent} from "./motherboard/motherboard.component";
import {GPUComponent} from "./gpu/gpu.component";

const routes: Routes = [
  {path: 'cpu', component: CPUComponent},
  {path: 'main', component: WelcomePageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'motherboard', component: MotherboardComponent},
  {path: 'main/CPU', redirectTo:'/cpu', pathMatch: 'full'},
  {path: 'main/Motherboard', redirectTo:'/motherboard', pathMatch: 'full'},
  {path: 'main/GPU', redirectTo: '/gpu', pathMatch: 'full'},
  {path: 'gpu', component:GPUComponent}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
