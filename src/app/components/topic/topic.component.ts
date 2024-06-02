import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TopicName} from "../../pages/topic-page/topic-page.component";

@Component({
  selector: 'topic',
  standalone: true,
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent implements OnInit {
  public topicName: TopicName = 'television';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: Params): void => this.topicName = params['name']);
  }
}
