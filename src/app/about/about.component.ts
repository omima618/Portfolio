import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  resumeLink: string = '../../assets/docs/Omima_Khlaed_frontend_2022.pdf';
  constructor() {}

  ngOnInit(): void {}
}
