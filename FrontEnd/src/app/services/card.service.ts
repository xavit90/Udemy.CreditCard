import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  myAppUrl = 'https://localhost:44304/';
  myApiUrl = 'api/CreditCards/';

  constructor(private http: HttpClient) { }

  cardSave(card: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(this.myAppUrl + this.myApiUrl, card);
  }
}
