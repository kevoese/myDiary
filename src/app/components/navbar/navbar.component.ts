import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navState: any;
  constructor( private router: Router, private route:ActivatedRoute) { 
    router.events.subscribe((path:any) => {
      if (path.url) {
        this.navState.navColorState = ( path.url == '/') ? false : true;
      } 
    });
  }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      'nav-blue': this.navState.navColorState,
      'nav-hide': this.navState.navHide,
    }
    return classes;
  }
}
