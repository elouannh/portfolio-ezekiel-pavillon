import { Component } from '@angular/core';
import {ClickDotComponent} from "../click-dot/click-dot.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'room',
  standalone: true,
  imports: [
    ClickDotComponent,
    NgOptimizedImage
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {

}
