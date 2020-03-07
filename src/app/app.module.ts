import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "../app/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BetService } from './services/bet.service';
import { BetUserService } from './services/bet-user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommunModule } from './commun/commun/commun.module'
import { ComponentModule } from './component/component/component.module' 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects'


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
    
  ],

  providers: [{provide: APP_BASE_HREF, useValue: './'}, BetService,BetUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
