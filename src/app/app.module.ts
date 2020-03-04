import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "../app/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BetService } from './services/bet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommunModule } from './commun/commun/commun.module'
import { ComponentModule } from './component/component/component.module' 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects'
import { TableModule, Table } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommunModule,
    ComponentModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
    TableModule,
    DropdownModule,
    MultiSelectModule,
    MatSnackBarModule,
    TabViewModule,
    MatSelectModule,
    MatFormFieldModule
  ],

  providers: [{provide: APP_BASE_HREF, useValue: './'}, BetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
