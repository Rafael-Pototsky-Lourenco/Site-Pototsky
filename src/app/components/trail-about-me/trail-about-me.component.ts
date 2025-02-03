import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trail-about-me',
  standalone: false,
  
  templateUrl: './trail-about-me.component.html',
  styleUrl: './trail-about-me.component.scss'
})
export class TrailAboutMeComponent {
  @Input ({ alias: 'aboutMeRight'}) textAboutMeRight: string = '';
  @Input ({ alias: 'aboutWorkRight'}) textAboutWorkRight: string = '';
  @Input ({ alias: 'aboutNumberRight'}) numberAboutYearRight: number = 0;

  @Input( { alias: 'aboutMeLeft1' }) textAboutMeLeft1: string = '';
  @Input( { alias: 'aboutMeLeft2' }) textAboutMeLeft2: string = '';

  @Input ({ alias: 'aboutWorkLeft1'}) textAboutWorkLeft1: string = '';
  @Input ({ alias: 'aboutWorkLeft2'}) textAboutWorkLeft2: string = '';

  @Input ({ alias: 'aboutNumberLeft1'}) numberAboutYearLeft1: number = 0;
  @Input ({ alias: 'aboutNumberLeft2'}) numberAboutYearLeft2: number = 0;
}
