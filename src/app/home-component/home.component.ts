import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sws-home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  title: String;
  lead: String;
  lead2: String;

  constructor() {
    this.title = 'Solarwinds Scanner from GRANGE';
    this.lead = 'Scan your PC, Mac or LINUX machine and assure yourself a malware free work environment';
    this.lead2 = 'To start a fresh scan, tap on the scan button below and follow the prompts.';
  }

  ngOnInit() {
  }

}
