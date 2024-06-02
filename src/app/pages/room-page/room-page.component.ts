import { Component } from '@angular/core';
import {RoomDotsComponent} from "../../components/room-dots/room-dots.component";

@Component({
  selector: 'app-room-page',
  standalone: true,
  imports: [
    RoomDotsComponent
  ],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.scss'
})
export class RoomPageComponent {
}
