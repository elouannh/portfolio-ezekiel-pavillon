import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomDotsComponent } from "./components/room-dots/room-dots.component";
import {TopicPageComponent} from "./pages/topic-page/topic-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomDotsComponent, TopicPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
