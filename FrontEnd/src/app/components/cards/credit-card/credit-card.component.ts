import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { CreditCard } from 'src/app/models/credit-card';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  creditCard: CreditCard;
  idCard: number = 0

  constructor(private formBuilder: FormBuilder, private cardService: CardService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      id: 0,
      cardHolder: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiryDate: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvc: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   }

  ngOnInit(): void {
    this.subscription = this.cardService.getCard$().subscribe(data => {
      this.creditCard = data;
      this.form.patchValue({
        cardHolder: this.creditCard.cardHolder,
        cardNumber: this.creditCard.cardNumber,
        expiryDate: this.creditCard.expiryDate,
        cvc: this.creditCard.cvc
      });
      this.idCard = this.creditCard.id;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cardSave() {
    if (this.idCard === 0) {
      this.Aggregate();
    } else {
      this.Edit();
    }
  }

  Aggregate() {
    const card: CreditCard = {
      cardHolder: this.form.get('cardHolder').value,
      cardNumber: this.form.get('cardNumber').value,
      expiryDate: this.form.get('expiryDate').value,
      cvc: this.form.get('cvc').value
    };
    this.cardService.cardSave(card).subscribe(data => {
      this.toastr.success("La tarjeta fue agregada con éxito...", "Registro Agregado");
      this.cardService.getCards();
      this.form.reset();
    });
  }

  Edit() {
    const card: CreditCard = {
      id: this.creditCard.id,
      cardHolder: this.form.get('cardHolder').value,
      cardNumber: this.form.get('cardNumber').value,
      expiryDate: this.form.get('expiryDate').value,
      cvc: this.form.get('cvc').value
    };
    this.cardService.cardUpdate(this.idCard, card).subscribe(data => {
      this.toastr.info("La tarjeta fue modificada con éxito...", "Registro Actualizado");
      this.cardService.getCards();
      this.form.reset();
      this.idCard = 0;
    });
  }
}