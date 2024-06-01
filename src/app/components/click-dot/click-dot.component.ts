import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'click-dot',
  standalone: true,
  imports: [],
  templateUrl: './click-dot.component.html',
  styleUrl: './click-dot.component.scss'
})
export class ClickDotComponent {
  @Input() public link: string = 'https://google.com/';

  constructor(public router: Router) { }

  protected readonly window = window;
}
