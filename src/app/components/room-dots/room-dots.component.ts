import { Component } from '@angular/core';
import {ClickDotComponent} from "../click-dot/click-dot.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'room-dots',
  standalone: true,
  imports: [
    ClickDotComponent,
    NgOptimizedImage
  ],
  templateUrl: './room-dots.component.html',
  styleUrl: './room-dots.component.scss'
})
export class RoomDotsComponent {

}
