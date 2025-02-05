import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: false,
  
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({ alias: 'courseName' }) courseName: string = '';
  @Input({ alias: 'courseInstitution' }) courseInstitution: string = '';
  @Input({ alias: 'courseTags' }) courseTags: string = '';
  @Input({ alias: 'courseConclusion' }) courseConclusion: string = '';
  @Input({ alias: 'courseLink' }) courseLink: string = '';
  @Input({ alias: 'courseNumber' }) courseNumber: number = 0;
  @Input({ alias: 'courseImage' }) courseImage: string = '';
}
