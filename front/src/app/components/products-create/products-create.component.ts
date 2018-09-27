import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Errors } from '../../models/errors';
import { NgForm} from '@angular/forms';
import { Token } from '../../models/token';


@Component({
  selector: 'ngx-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit, DoCheck {

  public products: Products;
  public save = false;
  public errors: Errors;
  public showErrors = {};
  public token:Token;
  public valideStatus = true;
  public validationCost = true;
  public validationQuantity = true;

  constructor(private _productsServices:ProductsService,
    private _route: ActivatedRoute,
    private _router: Router,) { 
      this.save = false;
      this.products = new Products(null, null, null, null, null, null, null);
      this.errors =  new Errors([],null,'','',false,200,'','');
    }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.products.token = localStorage.getItem('token');
    }else{
      this._router.navigate(['']);
    }
  }

  ngDoCheck(){
    if(
      this.products.value <= 10000000 && 
      this.products.value >= 800 &&
      this.products.value !== null
     ){


      this.validationCost = true;
   
   }else if(
     
     (
       this.products.value < 800 || 
       this.products.value > 10000000
     ) && 
     this.products.value != null
   ){
   
     this.validationCost = false;
   }

   if(this.products.status === null){
    this.valideStatus = false;
   }else{
    this.valideStatus = true;
   }

    if(
      this.products.quantity <= 1000 && 
      this.products.quantity >= 10 &&
      this.products.quantity !== null
    ){


      this.validationQuantity = true;
 
    }else if(
      
      (
        this.products.quantity < 10 || 
        this.products.quantity > 1000
      ) && 
      this.products.quantity != null
    ){
    
      this.validationQuantity = false;
    }


  }

  fnSubmit(f: NgForm){
    this.save = false;
      this._productsServices.saveProducts(this.products).subscribe(
          response => {
            this.showErrors = {};
            f.reset();
            this.save = true;
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
