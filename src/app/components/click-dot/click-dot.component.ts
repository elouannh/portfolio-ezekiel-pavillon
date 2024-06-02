import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {TopicName} from "../../pages/topic-page/topic-page.component";

@Component({
  selector: 'click-dot',
  standalone: true,
  imports: [],
  templateUrl: './click-dot.component.html',
  styleUrl: './click-dot.component.scss'
})
export class ClickDotComponent {
  @Input() public topicName: TopicName = 'television';

  constructor(public router: Router) { }

  protected readonly window: Window & typeof globalThis = window;
}
