import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomComponent } from "./components/room/room.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-ezekiel-pavillon';
}
