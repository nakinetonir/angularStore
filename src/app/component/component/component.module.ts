import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetPageComponent } from '../bet-page/bet-page.component';
import { CommunModule } from '../../commun/commun/commun.module'
    
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../commun/modal/modal.component'
@NgModule({
  declarations: [BetPageComponent],
  imports: [
    CommonModule,
    CommunModule,
    NgbModule
  ],
  exports : [
    BetPageComponent
  ],
  providers :[],
  entryComponents: [ModalComponent]
})
export class ComponentModule { }
