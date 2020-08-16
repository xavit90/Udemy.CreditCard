import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private cardService: CardService) {
    this.form = this.formBuilder.group({
      id: 0,
      cardHolder: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiryDate: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvc: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   }

  ngOnInit(): void {
  }

  cardSave() {
    const card: CreditCard = {
      cardHolder: this.form.get('cardHolder').value,
      cardNumber: this.form.get('cardNumber').value,
      expiryDate: this.form.get('expiryDate').value,
      cvc: this.form.get('cvc').value
    };
    this.cardService.cardSave(card).subscribe(data => {
      console.log("Guardado Exitosamente...");
      this.form.reset();
    });
  }
}