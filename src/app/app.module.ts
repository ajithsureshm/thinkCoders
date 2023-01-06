import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainUiComponent } from './main-ui/main-ui.component';
import { UsersComponent } from './main-ui/users/users.component';
import { HttpClientModule } from '@angular/common/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { PrimengtableComponent } from './primengtable/primengtable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProgressBarModule} from "angular-progress-bar";
import { ProgressivebarComponent } from './progressivebar/progressivebar.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainUiComponent,
    UsersComponent,
    PrimengtableComponent,
    ProgressivebarComponent
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
