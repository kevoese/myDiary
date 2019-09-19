import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myDiary';
  navState:any = {
  navColorState: false,
  navHide: false
  }

  onScroll (event) {
    const verticalOffset = event.target.scrollTop;
    if (verticalOffset > 15 && verticalOffset < 744) {
      this.navState =  { navColorState: false, navHide: true };
    }
    else if (verticalOffset > 745) {
      this.navState =  {navColorState: true, navHide: false };
    }
    else {
      this.navState =  { navColorState: false, navHide: false};
    }
  }


}
