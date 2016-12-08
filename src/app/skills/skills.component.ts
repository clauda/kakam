import { Component } from '@angular/core';

import { RESUME } from '../data';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  // { skills, experiences } = RESUME; // < Why this doesn't work?

  skills : any[] = RESUME.skills;
  experiences : any[] = RESUME.experiences;

  constructor() { }
  
}
