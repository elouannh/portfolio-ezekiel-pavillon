import { Component } from '@angular/core';
import {TopicComponent} from "../../components/topic/topic.component";
import {Router} from "@angular/router";

export type TopicName =
  | 'television'
  | 'trophy'
  | 'note'
  | 'frame'
  | 'monitor'
  | 'calendar'
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
