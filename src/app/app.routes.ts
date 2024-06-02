import { Routes } from '@angular/router';
import { TopicPageComponent } from "./pages/topic-page/topic-page.component";
import {RoomPageComponent} from "./pages/room-page/room-page.component";

export const routes: Routes = [
  { path: '', component: RoomPageComponent },
  { path: 'topic', component: TopicPageComponent }
];
