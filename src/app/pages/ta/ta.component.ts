import { Component } from '@angular/core';

import { Globals } from '../../../app/globals';
@Component({
  selector: "ta",
  templateUrl: 'ta.component.html',
})
export class TaComponent {
  title = '';
  language = '';
  constructor(private globals: Globals) {
    this.language = globals.getLanguage();
    if(this.language == 'bosnian')
    {
        this.title = 'naslov';
    }
    else if(this.language == 'english')
    {
      this.title = 'title';
    }

  }
}
