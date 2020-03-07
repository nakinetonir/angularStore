import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { BetUser } from 'src/app/models/BetUser';
import { Bet } from 'src/app/models/Bet';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbActiveModal]
})
export class ModalComponent implements OnInit {
  @Input("title") title: any;
  @Input("user") user: User;
  @Input("bet") bet: Bet;
  @Output() betUserBack: EventEmitter<any> = new EventEmitter();
  betUser: BetUser
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.betUser = {
      id: 0,
      idUser: this.user.id,
      bet_user_money: 0,
      winner: "",
      evento: this.bet.evento,
      active: 0
    }
  }
  closeModal(bet) {
    if(bet)
    {
        this.betUserBack.emit(bet)
        this.activeModal.close();
    }
    else
    {
      this.activeModal.close();
    }
  }
  desabledValue() {
    return (this.betUser.bet_user_money <= 0 || this.betUser.winner == "");
  }

}
