import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  name: string = 'Omima Khaled';
  jobTitle: string = 'Frontend Web Developer';
  constructor() {}

  ngOnInit(): void {}
}
