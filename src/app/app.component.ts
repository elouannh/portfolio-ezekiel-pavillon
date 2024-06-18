import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomDotsComponent } from "./components/room-dots/room-dots.component";
import {TopicPageComponent} from "./pages/topic-page/topic-page.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomDotsComponent, TopicPageComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public innerWidth: any;

  public ngOnInit(): void {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.innerWidth = window.innerWidth;
  }
}
