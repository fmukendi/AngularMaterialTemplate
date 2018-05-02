
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { environment } from './../environments/environment';

// Angular System Module 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// External Module 
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
// My Modules 
import { MaterialModule } from './shared/modules/index';
// My Compononent
import { AppComponent } from './app.component';
import {
  HomeComponent
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // External Modules
    FlexLayoutModule,
    ToastrModule.forRoot(),  // ToastrModule added
    NgxMaskModule.forRoot({}),
    // My Modules
    MaterialModule,
    // Routes
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
