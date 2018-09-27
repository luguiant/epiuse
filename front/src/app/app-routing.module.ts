
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { AuthGuardService } from './services/authguard.service';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { Error404Component } from './components/error404/error404.component';

//canActivate: [AuthGuardService]
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logout/:sure', component: HomeComponent},
  { path: 'user-dashboard', component: DasboardComponent,
    children: [
        {
          path: 'create-products',
          component: ProductsCreateComponent,
          canActivate: [AuthGuardService]
        },
        {
          path: 'list-products',
          component: ProductsListComponent,
          canActivate: [AuthGuardService]
        }
    ] 
  },
  { path:'register', component: RegisterComponent},
  { path: '**', component:  Error404Component },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
