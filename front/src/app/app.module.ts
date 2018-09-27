/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';
import { Error404Component } from './components/error404/error404.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsListComponent } from './components/products-list/products-list.component';




@NgModule({
  declarations: [
    AppComponent, 
    DasboardComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    Error404Component,
    ProductsCreateComponent,
    ProductsListComponent
  ],
  imports: [
    Ng2SmartTableModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbThemeModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbContextMenuModule,
    NbInputModule, //add this line
    NbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    NbUserModule,
    NbProgressBarModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
