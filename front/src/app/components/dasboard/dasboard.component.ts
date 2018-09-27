import { MENU_CLIENT } from '../../menu/client-menu';
import { Component, OnInit } from '@angular/core';
import { MENU_ADMIN } from '../../menu/admin-menu';

import { Router, ActivatedRoute, Params  } from '@angular/router';


@Component({
  selector: 'ngx-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
    
  public menu = {}
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.menu = MENU_ADMIN;
  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      console.log('holi');
      this._router.navigate(['']);
    }
  }
}
