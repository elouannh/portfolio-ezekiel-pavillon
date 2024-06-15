import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {TopicName} from "../../pages/topic-page/topic-page.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'click-dot',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './click-dot.component.html',
  styleUrl: './click-dot.component.scss'
})
export class ClickDotComponent {
  @Input() public topicName: TopicName = 'television';
  @Input() public link: string = 'None';
  @Input() public disabled: boolean = false;
  @Input() public title: string | null = null;

  constructor(public router: Router) { }

  protected openOrNavigate(): void {
    if (this.disabled) return;
    if (this.link === 'None')
      void this.router.navigate(['/topic'], { queryParams: { name: this.topicName, title: this.title } });
    else window.open(this.link, "_blank");
  }
}
