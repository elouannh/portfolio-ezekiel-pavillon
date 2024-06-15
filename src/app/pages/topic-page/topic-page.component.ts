import { Component } from '@angular/core';
import {TopicComponent} from "../../components/topic/topic.component";
import {Router} from "@angular/router";

export type TopicName =
  | 'television'
  | 'trophy'
  | 'note'
  | 'frame1'
  | 'frame2'
  | 'frame3'
  | 'monitor'
  | 'media1'
  | 'media2'
  | 'media3'
  | 'poster';

@Component({
  selector: 'topic-page',
  standalone: true,
  imports: [TopicComponent],
  templateUrl: './topic-page.component.html',
  styleUrl: './topic-page.component.scss'
})
export class TopicPageComponent {
  constructor(public router: Router) {
  }
}
