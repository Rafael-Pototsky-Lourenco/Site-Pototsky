import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trail-about-me',
  standalone: false,
  
  templateUrl: './trail-about-me.component.html',
  styleUrl: './trail-about-me.component.scss'
})
export class TrailAboutMeComponent {
  @Input( { alias: 'aboutMe' }) textAboutMe: string = '';
  @Input ({ alias: 'aboutWork'}) textAboutWork: string = '';
  @Input ({ alias: 'aboutYear'}) numberAboutYear: string = '';
  @Input ({ alias: 'aboutImage'}) aboutImage: string = '';
  @Input ({ alias: 'isLeft' }) isLeft: boolean = true;
}