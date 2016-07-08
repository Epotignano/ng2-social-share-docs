import { Component } from '@angular/core';
import { CeiboShare } from './shared/ng2-social-share';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [CeiboShare],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  repoUrl= 'https://github.com/Epotignano/ng2-social-share'
  imageUrl='https://avatars2.githubusercontent.com/u/10674541?v=3&s=200'
}
