import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  showFiller = false;

  date: Date;

  constructor() { }

  ngOnInit() {

    this.date = new Date();
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }

}
