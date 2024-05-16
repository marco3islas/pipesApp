import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedMenu} from './shared-menu/shared-menu.component';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [
    SharedMenu
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    SharedMenu
  ]
})
export class SharedModule { }
