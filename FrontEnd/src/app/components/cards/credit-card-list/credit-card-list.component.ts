import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {

  constructor(public cardService: CardService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }

  cardDelete(id: number) { 
    if (confirm("¿Estas seguro que deseas eliminar el registro?")) {
      this.cardService.cardDelete(id).subscribe(data => {
        this.toastr.warning("La tarjeta fue eliminada con éxito...", "Registro Eliminado");
        this.cardService.getCards();
      });
    }
  }

  edit (card) {
    this.cardService.update(card);
  }
}
