import { ProductsService } from '../../services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Errors } from '../../models/errors';
import { Token } from '../../models/token';
import { SETTINGS_LIST } from '../../config/settings-list-products';

@Component({
  selector: 'ngx-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public token: Token;
  public allCredits;
  public errors: Errors;
  public showErrors = {};
  public data = {};
  public meta = {};
  public settings = {};


  constructor(
    private _userCredit: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
      this.settings = SETTINGS_LIST
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.token = new Token(localStorage.getItem('token'));
    }else{
      this._router.navigate(['']);
    }
    
    this.getCredits();

  }

  getCredits(){
    this._userCredit.listProducts().subscribe(
      response => {
        this.data = response.data;
        this.meta = response.meta;
      },
      error => {
          this.errors = <any>error;
          if(this.errors.error.error){
              
            this.showErrors = Object.entries(this.errors.error.error).map(([type, value]) => ({type, value}));
            
          }
          
      }
  );
  }


}
