import { ImageSelectedDirective } from './image-selected.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ImageSelectedDirective],
  imports: [
    CommonModule
  ],
  exports:[ImageSelectedDirective]
})
export class DirectivesModule { }
